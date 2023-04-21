import React from 'react'
import CardRow from '../card-row/card-row'
import CardColumn from '../card-column/card-column'
import { useAppSelector } from '@hook/hooks'

interface BoxCardProps{
    className?: string 
}

const BoxCard:React.FC<BoxCardProps> = ({className=''}) => {
  const { topmovie } = useAppSelector((state) => state.movie);
  return (
    <div className={` ${className} clsboxcard`}>
        <div className='clsboxcard-content'>
            <h3 className='clsboxcard-title'> Book</h3>
            <CardColumn item={topmovie[16]} />
        </div>
    </div>
  )
}

export default BoxCard