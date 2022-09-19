import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faDivide } from '@fortawesome/free-solid-svg-icons'

const Data = [
  {
    id: 1,
    type: 'c',
    value: 'C',
  },
  {
    id: 2,
    type: 'division',
    value: <FontAwesomeIcon icon={faDivide} />,
  },
  {
    id: 3,
    type: 'multiply',
    value: 'X',
  },

  {
    id: 4,
    type: 'delete',
    value: <FontAwesomeIcon icon={faDeleteLeft} />,
  },
  {
    id: 13,
    type: 'number',
    value: '1',
  },
  {
    id: 14,
    type: 'number',
    value: '2',
  },
  {
    id: 15,
    type: 'number',
    value: '3',
  },
  {
    id: 12,
    type: 'addition',
    value: '+',
  },
  {
    id: 9,
    type: 'number',
    value: '4',
  },
  {
    id: 10,
    type: 'number',
    value: '5',
  },
  {
    id: 11,
    type: 'number',
    value: '6',
  },
  {
    id: 8,
    type: 'minus',
    value: '-',
  },

  {
    id: 5,
    type: 'number',
    value: '7',
  },

  {
    id: 6,
    type: 'number',
    value: '8',
  },

  {
    id: 7,
    type: 'number',
    value: '9',
  },

  {
    id: 16,
    type: 'point',
    value: '.',
  },

  {
    id: 17,
    type: 'number',
    value: '0',
  },

  {
    id: 20,
    type: 'equals',
    value: '=',
  },
]

export default Data
