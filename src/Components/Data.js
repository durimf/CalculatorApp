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
    value: <FontAwesomeIcon icon={faC} />,
  },
  {
    id: 2,
    value: '( )',
  },
  {
    id: 3,
    value: '%',
  },

  {
    id: 4,
    value: <FontAwesomeIcon icon={faDeleteLeft} />,
  },

  {
    id: 5,
    value: '7',
  },

  {
    id: 6,
    value: '8',
  },

  {
    id: 7,
    value: '9',
  },

  {
    id: 8,
    value: <FontAwesomeIcon icon={faX} />,
  },

  {
    id: 9,
    value: '4',
  },

  {
    id: 10,
    value: '5',
  },

  {
    id: 11,
    value: '6',
  },

  {
    id: 12,
    value: <FontAwesomeIcon icon={faMinus} />,
  },

  {
    id: 13,
    value: '1',
  },

  {
    id: 14,
    value: '2',
  },

  {
    id: 15,
    value: '3',
  },
  {
    id: 16,
    value: <FontAwesomeIcon icon={faPlus} />,
  },
  {
    id: 17,
    value: '0',
  },
  {
    id: 18,
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
    value: <FontAwesomeIcon icon={faDivide} />,
  },
  {
    id: 20,
    value: <FontAwesomeIcon icon={faEquals} />,
  },
]
