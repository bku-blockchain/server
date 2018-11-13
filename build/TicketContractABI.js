module.exports = [{
  'constant': false,
  'inputs': [{
    'name': 'tid',
    'type': 'bytes32'
  },
  {
    'name': 'uid',
    'type': 'bytes32'
  }
  ],
  'name': 'AllocateTicket',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
},
{
  'anonymous': false,
  'inputs': [{
    'indexed': false,
    'name': 'tid',
    'type': 'bytes32'
  },
  {
    'indexed': false,
    'name': 'uid',
    'type': 'bytes32'
  }
  ],
  'name': 'TicketAllocated',
  'type': 'event'
},
{
  'inputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'constructor'
},
{
  'constant': true,
  'inputs': [],
  'name': 'owner',
  'outputs': [{
    'name': '',
    'type': 'address'
  }],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
},
{
  'constant': true,
  'inputs': [{
    'name': '',
    'type': 'bytes32'
  }],
  'name': 'ticket',
  'outputs': [{
    'name': '',
    'type': 'bytes32'
  }],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
},
{
  'constant': true,
  'inputs': [{
    'name': '',
    'type': 'bytes32'
  }],
  'name': 'user',
  'outputs': [{
    'name': '',
    'type': 'bytes32'
  }],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}
]
