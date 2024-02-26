import { expItem } from '../../models/experience'
import './experience.css'

type Props = {
  item: expItem,
  onChoice: (arg0: number) => void
}

const ListItem = ({ item, onChoice }: Props) => {
  return (
    <li className="list-item">
      <div className='list-first-line'>
        <div className="left">
          <p className="exp-date">{item.time}</p>
          <p className="position">{item.position}</p>
        </div>
      </div>
      <div className='list-second-line'>
        <div className='company-box'>
          <a
            className='company'
            href={item.link}
            target='_blank'
            title='Open in new tab'
            rel="noreferrer"
          >{item.company}</a>
        </div>
          <svg className='small-svg' onClick={() => onChoice(item.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
      </div>
    </li>
  )
}

export default ListItem;