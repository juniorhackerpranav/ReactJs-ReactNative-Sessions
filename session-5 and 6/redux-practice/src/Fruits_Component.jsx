import { useDispatch, useSelector } from 'react-redux'
import { addFruit } from './redux/fruitsSlice';

export default function Fruits_Component() {
    const fruits = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    console.log(fruits);

    return (
        <div>
            <p>Fruits List</p>

            <div className="">
                <button onClick={() => {
                    dispatch(addFruit("Banana"));
                }}>Add new Fruiit</button>
            </div>

            <p>Fruits List</p>

            <div className="">
                {
                    fruits.map((val) => {
                        return <div>
                            Value : {val}
                        </div>
                    })
                }
            </div>
        </div>
    )
}
