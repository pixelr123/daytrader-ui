import React from 'react'
import { Wrapper } from '../../components/StyledComp'
import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import { ConfigurationMapping as data } from './configDataMapping';
import './styles.scss';

export default function Configuration() {
  return (
    <div className="table__wrapper container-fluid">
      <Wrapper>
        <div className="row">
          <div className="col mt-4">
            <div className="wrapper">
              <div className="table__heading">
                <div className="d-flex flex-row align-items-center border-bottom">
                  <div className="flex-column text-center text-capitalize f-14 text-bold w-100 p-2 mb-10">
                    Configuration Utilities
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center border-bottom mt-2">
                  <div className="flex-column text-center f-14 text-bold mb-10">
                    Benchmark Configuration
                    Tools
                  </div>
                  <div className="flex-column text-center text-capitalize f-14 text-bold w-100">
                    Description
                  </div>
                </div>
              </div>
              <TableContainer>
                <Table className="tlf">
                  <TableBody>
                    {data.map(item => (
                      <TableRow>
                        <TableCell className="f-14 text-bold config__item">
                          <a href={item.route}>{item.routeName}</a>
                        </TableCell>
                        <TableCell className="">{item.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </Wrapper >
    </div>
  )
}
