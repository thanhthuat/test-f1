import React from 'react'

interface Iheader {}

const Header = (props: Iheader) => {
  return (
    <div className='prefixheader'>
        <div className='prefixheader-content'>
            <ul className='prefixheader-content'>
                <li className='prefixheader-item' > About Chosun Biz</li>
                <li className='prefixheader-item'>organization and people</li>
                <li className='prefixheader-item'>Vision</li>
                <li className='prefixheader-item'>Service and business information</li>
                <li className='prefixheader-item'>Code of Ethics Guidelines</li>
                <li className='prefixheader-item'>Recruitment</li>
                <li className='prefixheader-item'>way to come</li>
               
            </ul>
        </div>
    </div>
  )
}
export default Header