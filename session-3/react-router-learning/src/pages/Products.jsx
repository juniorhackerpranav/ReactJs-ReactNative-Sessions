import { Link } from 'react-router-dom'


export default function Products() {
    return (
        <div>
            <div>
                <p>These are some Products</p>

                <div className="">
                    <Link to="/product/product_id_1">
                        Product 1
                    </Link>
                    <br />
                    <Link to="/product/product_id_2">
                        Product 2
                    </Link>
                    <br />
                    <Link to="/product/product_id_3">
                        Product 3
                    </Link>

                </div>
            </div>
        </div>
    )
}
