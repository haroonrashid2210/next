import React from 'react'
import {Input, Table as ReactStrapTable} from 'reactstrap'

interface columnObj {
    title?: string,
    dataKey?: string,
    render?: () => {},
    checkbox?: boolean
}

interface Props {
    columns: columnObj[],
    data: object[],
    checkedList?: any,
    setCheckedList?: any,
    allChecked?: boolean,
    setAllChecked?: any
}

const Table: React.FC<Props> = ({ allChecked, checkedList, columns, data, setAllChecked, setCheckedList }) => {
    return (
        <div>
            <ReactStrapTable hover>
                <thead>
                    <tr>
                        {columns.map(column => {
                            if (column.checkbox) {
                                return (
                                    <th>
                                        {/* <input
                                            type="checkbox"
                                            checked={allChecked}
                                            onChange={onHeaderCheckboxChange}
                                        /> */}
                                    </th>
                                )
                            } else return <th>{column.title}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map(dataItem => (
                        <tr>
                            {columns.map(column => {
                                if (column.checkbox) return (
                                    <td>
                                        {/* <Input
                                            type="checkbox"
                                            disabled={dataItem.is_archived}
                                            checked={checkedList.includes(dataItem.id)}
                                            onChange={() => onCheckboxChange(dataItem.id)}
                                        /> */}
                                    </td>
                                )
                                if (column.hasOwnProperty('render') && column.dataKey) return <td>{column.render(dataItem[column.dataKey])}</td>
                                if (column.hasOwnProperty('render') && !column.dataKey) return <td>{column.render(dataItem)}</td>
                                else return <td>{dataItem[column.dataKey]}</td>
                            })}
                        </tr>
                    ))}
                </tbody>
            </ReactStrapTable>
        </div>
    )
}

export default Table;