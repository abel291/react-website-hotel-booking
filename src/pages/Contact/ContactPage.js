
import BannerTitle from "../../components/BannerTitle"
import { useStore } from "../../context/StoreContext"

const ContactPage = () => {
    const { pages } = useStore()
    const page = pages.contact
    
    return (
        <>  
            <BannerTitle title={page.title} subTitle={page.sub_title} img={null} />
            <div className="container mx-auto max-w-screen-xl ">
                <div className="flex flex-col sm:flex-row sm:space-x-24 space-y-4 sm:space-y-0">
                    <div>
                        <h4 className="font-bold font-title text-xl md:pb-4">Direccion</h4>
                        <p className="text-gray-600 text-sm">
                            23400 S Western Ave, <br /> Harbor City, CA 90710
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold font-title text-xl md:pb-4">Contacto</h4>
                        <p className="text-gray-600 text-sm">
                            hello@example.com <br /> +1 514.123.4567
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold font-title text-xl md:pb-4">Síganos</h4>
                        <p className="text-gray-600 text-sm">
                            Connect with me on <a href="/">facebook</a>,<br />
                            <a href="/">twitter</a> or <a href="/">instagram</a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="py-content filter grayscale">
                <iframe
                    className="w-full"
                    height="480"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=17&amp;output=embed&amp;iwloc=near"
                    title="London Eye, London, United Kingdom"
                    aria-label="London Eye, London, United Kingdom"
                ></iframe>
            </div>

            <div className="container mx-auto max-w-screen-md py-content  text-center">
                <h4 className="text-2xl md:text-4xl pb-5 font-bold font-title ">Solo una forma. Es fácil.</h4>
                <form className="space-y-3">
                    <input className="form-input form-input-border-normal" type="text" name="" placeholder="Nombre completo" />

                    <input className="form-input form-input-border-normal" type="text" name="" placeholder="Email" />

                    <textarea rows="5" className="form-input form-input-border-normal" placeholder="Comentario"></textarea>
                    <button className="px-4 py-2 justify-center  md:px-6 rounded-full text-white bg-orange-500 flex md:inline-flex items-center font-bold">
                    Enviar mensaje
                </button>
                </form>

                
            </div>
        </>
    )
}

export default ContactPage
