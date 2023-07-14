import { TECNOLOGIES } from "@/config/tecnologies";

export default function TecnologiesPage() {
    return (
        <div>
            <h1 className="text-pink-500 font-bold text-5xl">Tecnologies</h1>
            <p className="text-gray-300 mb-2 ">That I have used in this project</p>
            <section>


                {
                    TECNOLOGIES.map((tecnology) => (

                        <article key={tecnology.title} className="mb-5">
                            <div>
                                <h3 className="text-pink-500 font-bold text-lg">{tecnology.title}</h3>
                                <ul>
                                    {
                                        tecnology.tecnologies.map((item) => (
                                            <li className="text-gray-300" key={item.id}>{item.name}</li>
                                        ))
                                    }
                                </ul>

                            </div>
                        </article>


                    ))
                }




            </section>
        </div>
    );
}