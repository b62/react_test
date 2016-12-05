import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {Table, Pagination, ProgressBar} from 'react-bootstrap';


import ApplicationsListElement from '../ApplicationListElement';
import UserDelete from '../UserDelete';


class ApplicationsList extends Component {

    constructor(props) {
        super(props);

        this.changePage = this.changePage.bind(this);

        // fetch apps from API if it doesn't exist
        if (this.props.apps.length === 0) {
            this.props.dispatch({
                type: 'APPLICATIONS_FETCH'
            })
        }
    }

    render() {
        let {apps} = this.props || [];
        // console.log('list render', this.props.apps);

        const per_page = 10;
        const pages = Math.ceil(this.props.apps.length / per_page);
        const current_page = this.props.page;
        const start_offset = (current_page - 1 ) * per_page;
        let star_count = 0;

        let visibleApps = apps.slice(start_offset, start_offset+per_page);

        if(!this.props.apps.length) {

            return (
                <ProgressBar active now={100} />
            )

        } else {

            return (
                <div>
                    <Table bordered hover responsive striped>
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Memos</th>
                            <th>
                                <div className="kmg"> Actions</div>
                            </th>

                        </tr>
                        </thead>
                        <tbody>
                        {visibleApps.map((app, idx) => (
                            <ApplicationsListElement key={idx} app={app}/>
                        ))}
                        </tbody>
                    </Table>

                    <Pagination className="apps-pagination pull-right"
                                bsSize="medium"
                                maxButtons={10}
                                first last next prev boundaryLinks
                                items={pages}
                                activePage={current_page}
                                onSelect={this.changePage}
                    />

                    {/*<UserDelete/>*/}
                </div>
            );
        }
    }

    changePage(page) {
        this.props.dispatch(push(`/?page=${page}`));
    }
}

//data adapter (selection of needed from the state)
const mapStateToProps = (state) => {
    return {
        apps: state.apps.list || [],
        page: Number(state.routing.locationBeforeTransitions.query.page) || 1
    }
};

// providing store into component from redux provider
// and export connected class
export default connect(mapStateToProps)(ApplicationsList);


