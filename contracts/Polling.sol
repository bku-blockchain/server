pragma solidity ^0.4.17;

contract Polling {
    
    address owner;
    bytes32 secretKey;
    
    uint startDate;
    uint endDate;
    
    struct Vote {
        bytes32 hashValue;
        bool used;
    }
    
    mapping(bytes32 => Vote) voters;
    uint numVoters;
    
    
    /** 
     * Events - Name is used as a sentence
     */
    event VotingCreated(uint numVoters, bytes32 uid, bytes32 hashValue);
    event TimeForVotingChanged(uint startDate, uint endDate);
    
    
    /** 
     * Modifiers
     */
    modifier shouldBeValidContract(uint _startDate, uint _endDate) {
        require(
            _startDate < _endDate && _endDate > now, 
            "Should have time for voting"
        );
        _;
    }

    modifier shouldBeOwner() {
        require(msg.sender == owner, "Only owner can do");
        _;
    }
    
    modifier shouldBeAuthorized(bytes32 _secretKey) {
        require(_secretKey == secretKey, "Don't have an authorization");
        _;
    }
    
    modifier shouldBeValidTime() {
        require(now >= startDate, "It's not time for voting");
        require(now <= endDate, "It's too late for voting");
        _;
    }
    
    modifier shouldBeValidUser(bytes32 uid) {
        require(voters[uid].used == false, "The user used to vote");
        _;
    }
    
    
    /** 
     * Functions - Transaction methods
     */
    constructor(bytes32 _secretKey, uint _startDate, uint _endDate) public
        shouldBeValidContract(_startDate, _endDate)
    {
        owner = msg.sender;
        secretKey = _secretKey;
        startDate = _startDate;
        endDate = _endDate;
    }
    
    function createVoting(bytes32 _secretKey, bytes32 uid, bytes32 hashValue) public
        shouldBeAuthorized(_secretKey)
        shouldBeValidTime()
        shouldBeValidUser(uid)
    {
        numVoters++;
        voters[uid] = Vote(hashValue, true);
        emit VotingCreated(numVoters, uid, hashValue);
    }
    
    function changeTimeForVoting(bytes32 _secretKey, uint _startDate, uint _endDate) public
        shouldBeOwner()
        shouldBeAuthorized(_secretKey)
        shouldBeValidContract(_startDate, _endDate) 
    {
        startDate = _startDate;
        endDate = _endDate;
        emit TimeForVotingChanged(startDate, endDate);
    }
    
    /**
     * Getter functions, Call methods
     * Use keyword 'public view', use prefix 'get'
     */
    function getTimeForVoting() public view returns (uint, uint, uint) {
        return (startDate, endDate, now);
    }
    
    function getNumVoter() public view returns (uint) {
        return numVoters;
    }
}
