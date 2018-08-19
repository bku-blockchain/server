pragma solidity ^0.4.0;

contract TestVoting {
    
    struct Candidate {
        bytes32 uid;
        uint point;
        bool valid;
    }
    
    bytes32 secretKey;
    address owner;
    mapping(bytes32 => Candidate) candidates;
    uint numCandidates;
    
    event CandidateAdded(uint numCandidates, bytes32 uid);
    event CandidateVoted(bytes32 uid, uint point);
    
    constructor(bytes32 _secretKey) public {
        owner = msg.sender;
        secretKey = _secretKey;
    }
    
    modifier Authorization(bytes32 _secretKey) {
        require(msg.sender == owner, "Should be owner");
        require(_secretKey == secretKey, "Should have correct secret key");
        _;
    }

    function addCandidate(bytes32 _secretKey, bytes32 uid) public Authorization(_secretKey) {
        require(candidates[uid].valid);
        candidates[uid] = Candidate(uid, 0, true);
        numCandidates++;
        emit CandidateAdded(numCandidates, uid);
    }
    
    function voteCandidate(bytes32 uid) public {
        candidates[uid].point++;
        emit CandidateVoted(uid, candidates[uid].point);
    }
    
    function getNumCandidates() public view returns (uint) {
        return numCandidates;
    }
    
    function getPointCadidate(bytes32 uid) public view returns(uint) {
        return candidates[uid].point;
    }
}
