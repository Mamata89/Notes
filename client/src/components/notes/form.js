import React from 'react'
import { connect } from 'react-redux'
import { StartUpdateNote } from '../../actions/noteAction'
import { withRouter } from 'react-router-dom'

class NoteForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.notes ? this.props.notes.title : '',
            body: this.props.notes ? this.props.notes.body : '',
            category: this.props.notes ? this.props.notes.category.name : ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        // const id=this.props.notes._id
        e.preventDefault()
        const formData = {
            title: this.state.title,
            body: this.state.body,
            category: this.state.category
        }
        this.props.handleSubmit(formData)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>title</label>
                    <input type='text' name='title' value={this.state.title} onChange={this.handleChange} /><br />
                    <label>body</label>
                    <input type='text' name='body' value={this.state.body} onChange={this.handleChange} /><br />
                    <label>category</label>
                    <select id="category" value={this.state.category} className="form-control" name="category" onChange={this.handleChange}>
                        <option key="one">select</option>

                        {
                            this.props.categories ? this.props.categories.map(category => {
                                return (<option value={category._id} key={category._id}>{category.name}</option>)
                            }) : 'loading'
                        }

                    </select><br />
                    <input type='submit' value='submit' />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        categories: state.categories,
        notes: state.notes.find(note => note._id == id)
        
    }
}

export default withRouter(connect(mapStateToProps)(NoteForm))