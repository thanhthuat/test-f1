import Link from 'next/link';
import React from 'react'
interface CategoryHeaderProps{
    className?: string ;

}

const CategoryHeader:React.FC<CategoryHeaderProps> = ({className=''}) => {
  return (
    <div className={`${className} clscategoryheader`}>
        <ul className= 'clscategoryheader-content'>
            <li className= 'clscategoryheader-item' >
                <Link href={'/'}> Kinh doanh</Link>
            </li>
            <li className= 'clscategoryheader-item'>  <Link href={'/detail/1'}> Quốc tế</Link></li>
            <li className= 'clscategoryheader-item'>  <Link href={'/detail/1'}> Doanh nghiệp</Link></li>
            <li className= 'clscategoryheader-item'>  <Link href={'/detail/1'}> Chứng khoán</Link></li>
            <li className= 'clscategoryheader-item'>  <Link href={'/detail/1'}> Bất động sản</Link></li>
            <li className= 'clscategoryheader-item'>  <Link href={'/detail/1'}> Ebank</Link></li>
            <li className= 'clscategoryheader-item'>  <Link href={'/detail/1'}> Vĩ mô</Link></li>
            <li className= 'clscategoryheader-item'>  <Link href={'/detail/1'}> Tiền của tôi</Link></li>
        </ul>
    </div>
  )
}

export default CategoryHeader