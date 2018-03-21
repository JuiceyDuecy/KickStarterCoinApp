import React, { Component } from 'react';
import {
    Form,
    Input,
    Message,
    Button,
    Container,
    Card,
    Grid
} from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class ContributeForm extends Component {
    state = {
        value: '',
        errorMessage: '',
        loading: false
    };
    onSubmit = async event => {
        event.preventDefault(); //keeps browser from attempting to submit Form
        const campaign = Campaign(this.props.address);
        this.setState({ loading: true, errorMessage: '' });
        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, 'ether')
            });
            Router.replaceRoute(`/campaigns/${this.props.address}`);
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }
        this.setState({ loading: false, value: '' });
    };
    render() {
        return (
            <Container align={'right'}>
                <Form
                    onSubmit={this.onSubmit}
                    error={!!this.state.errorMessage}
                >
                    <Form.Field>
                        <label> Amount to Contribute </label>
                        <Input
                            onChange={event =>
                                this.setState({ value: event.target.value })
                            }
                            label="ether"
                            labelPosition="right"
                            value={this.state.value}
                        />
                    </Form.Field>
                    <Message
                        compact
                        error
                        header="Oops!"
                        content={this.state.errorMessage}
                    />
                    <Button loading={this.state.loading} primary>
                        Contribute!
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default ContributeForm;
