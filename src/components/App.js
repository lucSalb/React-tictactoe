import React from "react";
import '../styles/App.css';

class App extends React.Component{

    constructor(props){
        super(props);
        const matrix = [['','',''],['','',''],['','','']];
        this.state={posMatrixPiece:matrix,turn:'x'};
    }
    
    setPiece = (e, position) =>{
        e.preventDefault();
        console.log(position);
        const [row, col] = position.split('x');
        
        let turn = this.state.turn;
        let matrix = this.state.posMatrixPiece;

        if(matrix[row][col] !== ''){
            window.alert('Invalid move!');
            return;
        }

        matrix[row][col] = turn;

        if(turn==='x') turn='o';
        else turn='x';
        
        this.setState({posMatrixPiece:matrix,turn:turn});
    };

    render(){
        const matrix = this.state.posMatrixPiece;
        console.log(matrix[0][1]);
        return(
            <table id="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td className="table-data">
                            <button className="piece-button" onClick={e=>this.setPiece(e,'0x0')}>{matrix[0][0]}</button>
                        </td>
                        <td className="table-data">
                            <button className="piece-button" onClick={e=>this.setPiece(e,'0x1')}>{matrix[0][1]}</button>
                        </td>
                        <td className="table-data">
                            <button className="piece-button" style={{borderWidth:'0px 0px 3px 0px'}} onClick={e=>this.setPiece(e,'0x2')}>{matrix[0][2]}</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="table-data">
                            <button className="piece-button" onClick={e=>this.setPiece(e,'1x0')}>{matrix[1][0]}</button>
                        </td>
                        <td className="table-data">
                            <button className="piece-button" onClick={e=>this.setPiece(e,'1x1')}>{matrix[1][1]}</button>
                        </td>
                        <td className="table-data">
                            <button className="piece-button" style={{borderWidth:'0px 0px 3px 0px'}} onClick={e=>this.setPiece(e,'1x2')}>{matrix[1][2]}</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="table-data">
                            <button className="piece-button" style={{borderWidth:'2px 3px 0px 0px'}} onClick={e=>this.setPiece(e,'2x0')}>{matrix[2][0]}</button>
                        </td>
                        <td className="table-data">
                            <button className="piece-button" style={{borderWidth:'2px 3px 0px 0px'}} onClick={e=>this.setPiece(e,'2x1')}>{matrix[2][1]}</button>
                        </td>
                        <td className="table-data">
                            <button className="piece-button" style={{borderWidth:'2px 0px 0px 0px'}} onClick={e=>this.setPiece(e,'2x2')}>{matrix[2][2]}</button>
                        </td>
                    </tr>            
                </tbody>
            </table>
        );
    }
}

export default App;