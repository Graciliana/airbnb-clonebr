import Container from "../Container";
import Logo from './Logo'
import {useRouter} from 'next/router'

const Navbar = () => {
	return (
		<div className='fixed w-full bg-teal-100 z-10 shodow-sm'>
			<div className='py-4 border-b-[1px]'>
				<Container>
					<div
						className='
  			  flex
  			  flex-row
  			  items-center
  			  justify-between
  			  gap-3
  			  md:gap-0
  			  '
					>
						<Logo />
					
					</div>
				</Container>
			</div>
		</div>
	);
};
export default Navbar;
