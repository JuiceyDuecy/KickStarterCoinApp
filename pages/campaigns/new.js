import React, { Component } from 'react';
import Layout from '../../components/layout';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Link, Router } from '../../routes'; //anchor tags and routing

class CampaignNew extends Component {
    state = {
        minimumContribution: '',
        errorMessage: '',
        loading: false
    };
    //to handle 'this' like we want....
    onSubmit = async event => {
        event.preventDefault(); //keeps browser from attempting to submit Form
        this.setState({ loading: true, errorMessage: '' }); //loading button, and clear error if any
        try {
            const accounts = await web3.eth.getAccounts();
            await factory.methods
                .createCampaign(this.state.minimumContribution)
                .send({ from: accounts[0] });
            Router.pushRoute('/'); //redirect user after sucessful transaction
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }
        this.setState({ loading: false });
    };
    render() {
        return (
            <Layout>
                <h3> Create a new Campaign </h3>
                <Form
                    onSubmit={this.onSubmit}
                    error={!!this.state.errorMessage}
                >
                    <Form.Field>
                        <label> Minimum Contribution </label>
                        <Input
                            label="wei"
                            labelPosition="right"
                            value={this.state.minimumContribution}
                            onChange={event =>
                                this.setState({
                                    minimumContribution: event.target.value
                                })
                            }
                        />
                    </Form.Field>
                    <Message
                        error
                        header="Oops! Something went wrong..."
                        content={this.state.errorMessage}
                    />
                    <Button loading={this.state.loading} primary>
                        Create!
                    </Button>
                </Form>
            </Layout>
        );
    }
}
export default CampaignNew;
