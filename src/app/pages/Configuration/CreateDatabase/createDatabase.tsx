import React, { useState } from 'react'
import { Wrapper } from '../../../components/StyledComp';
import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import { Radio, Checkbox, Input, Button } from 'antd';
import htmlParser from "html-react-parser";
import '../styles.scss';
import { Link } from 'react-router-dom';
import { createDatabaseFields as items, MiscellaneousSettings as data } from './createDatabaseMapping';

export default function CreateDatabase() {

  const [value, setValue] = useState('Direct (JDBC)');

  const toggleRadio = (event: any) => {
    setValue(event.target.value);
  };

  const onChange = (e: any) => {
    console.log(`checked = ${e.target.checked}`);
  }

  return (
    <div className="container-fluid">
      <Wrapper>
        <div className="row">
          <div className="col">
            <div className="mt-3">
              <div className="d-flex flex-row flex-row-reverse">
                <div className="flex-column bg-red text-white dayTrader__badge">
                  DayTrader Configuration
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="wrapper mt-2" style={{ marginBottom: 64 }}>
              <div className="table__heading">
                <div className="row align-items-center border-bottom">
                  <div className="col text-center text-capitalize f-14 text-bold w-100 p-2 mb-10">
                    Current DayTrader Configuration
                    </div>
                </div>
                <div className="row align-items-center border-bottom mt-2">
                  <div className="col">
                    <div className="f-14">
                      The current DayTrader runtime configuration is detailed below. View and optionally update run-time parameters.
                          </div>
                    <div className="mt-2 f-14 mb-2">
                      <span className="text-bold">NOTE:</span> Parameters settings will return to default on server restart.
                            To make configuration settings persistent across application server stop/starts,
                            edit the servlet init parameters for each DayTrader servlet. This is described in the <Link to="/faq">DayTrader FAQ.</Link>
                    </div>
                  </div>
                </div>
                <TableContainer>
                  <Table className="tlf">
                    <TableBody>
                      {items.map((item, key) => (
                        <TableRow key={key}>
                          <TableCell className="f-14 config__item">
                            {item.columnName}
                            {item.values.map((field, index) => (
                              <div className="mt-2">
                                {item.type === 'radio' && (
                                  <Radio.Group
                                    key={index}
                                    onChange={(event: any) => toggleRadio(event)}
                                    value={value}>
                                    <Radio
                                      className="radio-item"
                                      value={field.name}>
                                      {field.name}
                                    </Radio>
                                  </Radio.Group>
                                )}
                              </div>
                            ))}
                          </TableCell>
                          <TableCell>
                            <div className="row">
                              <div className="col mt-2">
                                {htmlParser(item.description)}
                              </div>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell align="center" colSpan={2} className="text-bold f-14">
                          Miscellaneous Settings
                        </TableCell>
                      </TableRow>
                      {data.map((item, key) => (
                        <TableRow key={key}>
                          <TableCell className="config__item">
                            {item.values.map((field, index) => (
                              <div key={index}>
                                {item.type === 'input' &&
                                  <div className="mb-1 mt-1">
                                    {field.name}
                                  </div>
                                }
                                <div className="mt-1">
                                  {item.type === 'input'
                                    ? <Input />
                                    : <Checkbox
                                      onChange={onChange}>
                                      {field.name}
                                    </Checkbox>
                                  }
                                </div>
                              </div>
                            ))}
                          </TableCell>
                          <TableCell>
                            {htmlParser(item.description)}
                          </TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell align="right" colSpan={2}>
                          <Button type="primary">
                            Update Config
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}
