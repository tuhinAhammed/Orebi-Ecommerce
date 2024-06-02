import react from "react"
import logo from "../../assets/Logo.png"
import Container from "../Layout/Container"
import Flex from "../Layout/Flex"
const Navbar = () => {
    const pagePort = window.location.host
    console.log(pagePort);
    return (
        <Container>
            <div className="py-6">
                <Flex className="items-center">
                <div className="w-3/12 ">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="w-9/12 ">
                            <ul className="flex justify-end gap-x-[40px] text-base bold font-dmSans " >
                                <li className="text-primary cursor-pointer"><a href="/"> Home </a></li>
                                <li className="text-secondary hover:text-primary cursor-pointer"><a href={`/shop`}> Shop </a></li>
                                <li className="text-secondary hover:text-primary cursor-pointer"><a href="/About"> About </a></li>
                                <li className="text-secondary hover:text-primary cursor-pointer"><a href="/Contacts"> Contacts </a></li>
                            </ul>
                    </div>
                </Flex>
            </div>
            </Container>
    )
}
export default Navbar

