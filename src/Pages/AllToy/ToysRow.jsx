
const ToysRow = ({ toy }) => {
    const { sellerName, name, photo, category, price, quantity } = toy;

    return (
        <tr>
            <td>{sellerName}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} alt="Toy" />
                        </div>
                    </div>
                    <div>
                        <div>{name}</div>
                    </div>
                </div>
            </td>
            <td>{category}</td>
            <td>$ {price}</td>
            <td>{quantity}</td>
            <th>
                <button className="my-btn-outline">details</button>
            </th>
        </tr>
    );
};

export default ToysRow;