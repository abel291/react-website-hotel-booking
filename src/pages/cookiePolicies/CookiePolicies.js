import BannerTitle from "components/BannerTitle"
import Head from "components/Head"
import LoadingPage from "components/LoadingPage"
import usePage from "hooks/usePage"

const CookiePolicies = () => {
    const { data } = usePage("page/cookies_policy")
    if (!data) return <LoadingPage/>
    return (
        <>
            <Head title={data.page.seo_title} description={data.page.seo_description} />
            <BannerTitle title={data.page.title} subTitle={data.page.sub_title} img={null} />
            <div class="container mx-auto max-w-screen-xl pb-content">
                <h3 class="text-4xl font-title font-bold mb-8">Política de cookies</h3>

                <div class="space-y-4 font-title leading-relaxed">
                    <h3 class="text-2xl font-title ">¿Qué son las cookies?</h3>

                    <p class="">
                        Las Cookies son pequeños archivos de datos que se envían al ordenador del usuario, teléfono móvil u otro dispositivo
                        de acceso cuando visita una página web y que permiten obtener información relativa a su navegación o un código que
                        permite identificar unívocamente al usuario.
                    </p>

                    <h3 class="text-2xl font-title ">Tipología de cookies y finalidades de uso</h3>

                    <p>
                        Phasellus in erat tortor. Donec commodo metus in risus pulvinar, non aliquam massa congue. In nec neque semper,
                        commodo purus facilisis, vehicula magna. Etiam neque massa, tempor vitae tempus eu, pellentesque nec velit. Duis
                        quis elementum lacus. Etiam molestie nisl est, in sagittis quam suscipit at. Cras convallis, purus ut placerat
                        malesuada, neque lectus pharetra est, ac euismod nisl ipsum faucibus velit. Donec interdum egestas lacus, ac
                        vestibulum ipsum rhoncus nec. Donec sem libero, tristique non ex sit amet, pharetra viverra urna. Ut venenatis,
                        purus porttitor fermentum sollicitudin, lorem eros bibendum urna, vel tristique lectus arcu ut mauris.
                    </p>
                    <p>
                        Proin in odio et ligula elementum fermentum vitae quis felis. Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.
                    </p>

                    <h3 class="text-2xl font-title">Personalización</h3>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elit felis, porta ut massa in, consectetur finibus
                        nibh. Vestibulum in efficitur velit. Proin mollis est in risus faucibus, nec finibus mauris vehicula. Duis at
                        eleifend dui. Maecenas in dui eget erat ullamcorper dignissim nec sit amet tortor. Vivamus lorem felis, semper in
                        velit quis, tempor aliquam orci. Praesent non risus nec metus accumsan commodo sed pharetra augue.
                    </p>

                    <p>
                        In nec neque semper, commodo purus facilisis, vehicula magna. Etiam neque massa, tempor vitae tempus eu,
                        pellentesque nec velit.
                    </p>

                    <p>
                        {" "}
                        Duis quis elementum lacus. Etiam molestie nisl est, in sagittis quam suscipit at. Cras convallis, purus ut placerat
                        malesuada, neque lectus pharetra est, ac euismod nisl ipsum faucibus velit.
                    </p>

                    <h3 class="text-2xl font-title">Desactivación o eliminación de las cookies</h3>

                    <p>
                        Duis quis elementum lacus. Etiam molestie nisl est, in sagittis quam suscipit at. Cras convallis, purus ut placerat
                        malesuada, neque lectus pharetra est, ac euismod nisl ipsum faucibus velit. Donec interdum egestas lacus, ac
                        vestibulum ipsum rhoncus nec. Donec sem libero, tristique non ex sit amet, pharetra viverra urna. Ut venenatis,
                        purus porttitor fermentum sollicitudin, lorem eros bibendum urna, vel tristique lectus arcu ut mauris.
                    </p>

                    <p>
                        Proin in odio et ligula elementum fermentum vitae quis felis. Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.
                    </p>
                </div>
            </div>
        </>
    )
}

export default CookiePolicies
