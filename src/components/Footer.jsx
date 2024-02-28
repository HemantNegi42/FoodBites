function Footer() {
    return (
        <>
            <div className="text-center bg-[#02886F] p-10 font-semibold cursor-default">
                <div className="flex justify-evenly">
                    <div>
                        <h1 className="text-2xl mb-3">Food Home</h1>
                        <p >© 2024</p>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-2xl mb-3">Social Links</h1>
                        <a href='https://www.linkedin.com/in/hemant-negi-b2623127b/' target='_blank' className="hover:underline cursor-pointer" >LinkedIn</a>
                        <a href='https://github.com/HemantNegi42' target="_blank" className="hover:underline cursor-pointer">GitHub</a>
                        <a href='https://www.instagram.com/__max.42/' target="_blank" className="hover:underline cursor-pointer">Instagram</a>
                    </div>
                    <div>
                        <h1 className="text-2xl mb-3">Company</h1>
                        <p className="hover:underline">Privacy Policy</p>
                        <p className="hover:underline">Terms & Conditions</p>
                        <p className="hover:underline">Help</p>
                        <p className="hover:underline">Careers</p>
                    </div>
                </div>
                <div  className="text-2xl mt-5">
                    created with ❤️ by Hemant Negi
                </div>
            </div>
        </>
    )
}
export default Footer;