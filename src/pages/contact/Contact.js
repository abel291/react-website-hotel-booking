import BannerTitle from "components/BannerTitle"
import Button from "components/Button"
import Head from "components/Head"
import Input from "components/Input"
import Label from "components/Label"
import LoadingPage from "components/LoadingPage"
import NotificationError from "components/NotificationError"
import { formatErrors } from "helpers/helpers"
import usePage from "hooks/usePage"

const Contact = () => {
    const { data,error } = usePage("page/contact")
    if (error) return <NotificationError errors={formatErrors(error)} />
    if (!data) return <LoadingPage />
    return (
        <>
            <Head title={data.page.seo_title} description={data.page.seo_description} />
            <BannerTitle title={data.page.title} subTitle={data.page.sub_title} img={null} />
            <div className="container mx-auto  ">
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
            <div className="container mx-auto max-w-screen-md py-content  ">
                <div>
                    <h4 className="text-2xl md:text-4xl pb-5 font-bold font-title text-center">Solo una forma. Es fácil.</h4>
                    <form className="space-y-3 ">
                        <div className="grid grid-cols-2 gap-3">
                            <Input label="Nombre" name="name" placeholder="Nombre completo" />

                            <Input label="Apellido" name="email" placeholder="Email" />
                            <div className="col-span-2">
                                <Label htmlFor="comment">Comentario</Label>
                                <textarea id="comment" rows="5" className="w-full form-input mt-1 " placeholder="Comentario"></textarea>
                            </div>
                        </div>
                        <Button className="btn-primary">Enviar mensaje</Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
