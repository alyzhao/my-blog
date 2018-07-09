import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';

class MyEditor extends React.Component {
    constructor(props) {
        super(props);
        // 编辑器状态
        this.state = {editorState: EditorState.createEmpty()};
        // 双向绑定
        this.onChange = (editorState) => { 
            this.setState({editorState: editorState})
        };

        console.log('editorState')
    }

    render() {
        return (
            <Editor editorState={this.state.editorState} onChange={this.onChange}/>
        );
    }
}

export default MyEditor