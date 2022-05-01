import { RiDeleteBin5Fill } from "react-icons/ri"
import { ImPlus } from 'react-icons/im'
import img from "../../../src/images/logo/header-logo (1).png"
import './Allinventory.css'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import deleteData from "../../utilitis/deleteData";
import useInventory from "../../hooks/useInventory";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebaseinit";
const Allinventory = () => {
    const [user] = useAuthState(auth)
    const [products, setProducts] = useState([])
    const [inventorys, setInventorys] = useInventory(user)
    useEffect(() => {
        fetch('https://bikes-server-side.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDeleteBtn = (id) => {
        const url = `https://bikes-server-side.herokuapp.com/bikes/${id}`
        deleteData(id, url, products, setProducts)
    }
    return (

        <div className='container allinventory mx-auto'>
            <h1 className='mb-5 text-center'>Our All Collections </h1>
            <div className='row gx-5'>
                <div className='table-section p-4 col-12 col-md-8 order-2'>
                    <table className='table table-hover rounded-3'>
                        <thead className='bg-secondary text-white border-0'>
                            <tr className='bg-seondary'>
                                <th scope="col">Sr/No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Seller</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                products.map((product, index) =>

                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{product?.name}</td>
                                        <td>{product?.quantity}</td>
                                        <td>{product?.company}</td>
                                        <td><button onClick={() => handleDeleteBtn(product._id)} className="btn btn-danger"><RiDeleteBin5Fill /></button></td>
                                    </tr>

                                )
                            }
                            {
                                inventorys.map((product, index) =>

                                    <tr>
                                        <th scope="row">{index + 12}</th>
                                        <td>{product?.name}</td>
                                        <td>{product?.quantity}</td>
                                        <td>{product?.company}</td>
                                        <td><button onClick={() => handleDeleteBtn(product._id)} className="btn btn-danger"><RiDeleteBin5Fill /></button></td>
                                    </tr>

                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className="addform-section col-12 col-md-4 order-1">
                    <div className='mb-4'>
                        <span className='logo-text'>Bikers</span>
                        <img style={{ width: "100px" }} src={img} alt="" />
                    </div>
                    <Link className='text-decoration-none' to='/addinventory'>
                        <span className=' me-2'>< ImPlus className='mb-2' /></span> <span >Add Your Own Collection</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Allinventory;