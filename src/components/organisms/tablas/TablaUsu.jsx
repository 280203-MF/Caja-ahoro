import {TresPuntos} from '../../atoms';

export const TablaUsu= () =>{
    return(
        <>
        <table className="uk-table uk-table-hover uk-table-divider">
                <thead >
                    <tr>
                        <th className="uk-text-center" style={{ fontWeight: 'bold' }}>Clientes Accinados</th>
                        <th className="uk-text-center" style={{ fontWeight: 'bold' }}>Saldo Actual</th>
                        <th className="uk-text-center" style={{ fontWeight: 'bold' }}>Saldo Disponible</th>
                        <th className="uk-text-center" style={{ fontWeight: 'bold' }}>Transacciones pendientes</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="uk-text-center">Marco</td>
                        <td className="uk-text-center">$1000.00</td>
                        <td className="uk-text-center">$1000.00</td>
                        <td className="uk-text-center">$1000.00</td>
                        <td><TresPuntos/></td>

                    </tr>
                    <tr>
                        <td className="uk-text-center">Marco</td>
                        <td className="uk-text-center">$1000.00</td>
                        <td className="uk-text-center">$1000.00</td>
                        <td className="uk-text-center">$1000.00</td>
                        <td><TresPuntos/></td>
                    </tr>
                    <tr>
                        <td className="uk-text-center">Marco</td>
                        <td className="uk-text-center">$1000.00</td>
                        <td className="uk-text-center">$1000.00</td>
                        <td className="uk-text-center">$1000.00</td>
                        <td><TresPuntos/></td>
                    </tr>
                    <tr>
                        <td className="uk-text-center">Marco</td>
                        <td className="uk-text-center">$1000.00</td>
                        <td className="uk-text-center">$1000.00</td>
                        <td className="uk-text-center">$1000.00</td>
                        <td><TresPuntos/></td>
                    </tr>
                </tbody>
                </table>
        </>
    )
}