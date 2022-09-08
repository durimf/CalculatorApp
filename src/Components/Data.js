import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faC,
  faDeleteLeft,
  faX,
  faMinus,
  faPlus,
  faEquals,
  faDivide,
  faCircleSmall,
} from '@fortawesome/free-solid-svg-icons'
import CircleIcon from '@mui/icons-material/Circle'

export default [
  {
    id: 1,
    type: 'c',
    value: 'C',
  },
  {
    id: 2,
    type: '()',
    value: '()',
  },
  {
    id: 3,
    type: 'symbol',
    value: '%',
  },

  {
    id: 4,
    type: 'delete',
    value: <FontAwesomeIcon icon={faDeleteLeft} />,
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
    id: 8,
    type: 'multiply',
    value: <FontAwesomeIcon icon={faX} />,
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
    id: 12,
    type: 'minus',
    value: <FontAwesomeIcon icon={faMinus} />,
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
    id: 16,
    type: 'addition',
    value: <FontAwesomeIcon icon={faPlus} />,
  },
  {
    id: 17,
    type: 'number',
    value: '0',
  },
  {
    id: 18,
    name: 'point',
    value: (
      <CircleIcon
        fontSize="small"
        sx={{
          height: 8,
        }}
      />
    ),
  },
  {
    id: 19,
    type: 'division',
    value: <FontAwesomeIcon icon={faDivide} />,
  },
  {
    id: 20,
    type: 'equals',
    value: <FontAwesomeIcon icon={faEquals} />,
  },
]
