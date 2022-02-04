import React, { Component } from 'react';
import { Text, Textarea, Box } from '@chakra-ui/react'

interface Props {
    title: string;
    fontSize: string;

    boxWidth: string;
    boxHeight: string;
}
 
interface State {
    
}

class TextInputComponent extends React.Component<Props, State> {

    public static defaultProps = {
        title: "Impt text wehfui",
        fontSize: "15px",
        
        boxWidth: "50%",
        boxHeight: "20%",
    };

    constructor(props: Props | Readonly<Props>) {
        super(props);
    }

    render() { 
        console.log(this.props.fontSize);
        return ( 
            <div style={
                {
                    display: 'flex',
                    width: this.props.boxWidth,
                    height: this.props.boxHeight,
                    flexDirection: 'column',
                }
            }>
                <Text numberOfLines={1} fontSize= {this.props.fontSize} style = {
                    {
                        textAlign: "left",
                        whiteSpace: 'nowrap',
                    }
                }> 
                    {this.props.title}
                </Text>
                <Textarea placeholder="Type here..."/>
            </div>
         );
    }
}
//const styles = {
//    mainContainer: {
//        backgroundColor: "white",
//        borderColor: "#FFE32C",
//        borderWidth: 3,
//        width: "95%",
//        borderRadius: 15,
//        padding: "3%",
//        margin: "1%",
//    },
//}
 
export default TextInputComponent;