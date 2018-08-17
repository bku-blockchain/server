import mongoose from 'mongoose';
import moment from 'moment';

const Poll = mongoose.model('Poll');
const Vote = mongoose.model('Vote');

export const create = async (req, res, next) => {

  const { pollID, userID, questions } = req.body;

  try {
    /** Check pollID existen */
    const poll = await Poll.findById(pollID);
    if (!poll) {
      return res.status(404).send({ message: 'No poll existen with the poll ID' });
    }

    /** Check time */
    if (moment().isBefore(moment(poll.startDate))) {
      return res.status(400).send({ message: 'It\'s not time to vote' });
    }
    if (moment().isAfter(moment(poll.endDate))) {
      return res.status(400).send({ message: 'It\'s too late to vote' });
    }

    /** Check user permission */
    // TODO

    /** Check questions */
    const validQuestions = questions.map((q) => {
      const { ordinal, type, options } = q;
      if (!ordinal || !type || !options) return null;
      if (type !== 'Rating' && type !== 'Polling') return null;
      if (!options.length) return null;
      const pollQuestion = (poll.questions.filter(o => o.ordinal === ordinal) || [])[0];
      if (!pollQuestion) return null;
      if (type !== pollQuestion.type) return null;
      if (type === 'Polling') {
        if (options.length > pollQuestion.maxSelected) return null;
      }
      q.options = [...options].filter(o => (
        pollQuestion.options.filter(p => p.ordinal === o.ordinal) || [])[0] !== null);

      return q;
    }).filter(o => o !== null);

    if (validQuestions.length === 0) {
      return res.status(400).send({ message: 'No valid questions' });
    }

    /** Create new Vote instance */
    const vote = new Vote({
      userID, pollID, questions: validQuestions
    });
    vote.id = vote._id.toString();

    /** Save data */
    return vote.save().then(vote => res.status(200).send(vote));

  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }

};
