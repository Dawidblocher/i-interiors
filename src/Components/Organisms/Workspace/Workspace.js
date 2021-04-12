
import React, { useRef, useEffect, useState } from 'react'
import Img from 'src/Assets/Img/room.jpg';
import CommentForm from 'src/Components/Organisms/CommentForm/CommentForm';
import styled from 'styled-components';

const comment = {
    x:100,
    y: 0,
}

const WorkspaceWrapper = styled.div`
        position: relative;
    `

const Workspace = (props) => {

    const canvasRef = useRef(null);
    const [commentFormPosition, setCommentFormPosition] = useState(comment);
    const [visible, setVisible] = useState(false);

    

    const draw = ctx => {
        ctx.fillStyle = '#1a73e8'
        ctx.beginPath()
        var img = new Image();
        img.src = Img; 
        img.onload = function(){
            ctx.drawImage(img, 0, 0);
            
        }
        ctx.fill();
      }
      
      useEffect(() => {       
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        
        draw(context)
      }, [draw])

      const handleClick = (e) => {
          e.preventDefault();
          setVisible(false);
      }

      const handleContextmenu = (e) => {
        e.preventDefault();
        const rect = e.target.getBoundingClientRect()
        const x = e.clientY - rect.top
        const y = e.clientX - rect.left
        setCommentFormPosition({
            x:x,
            y: y,
        });
        setVisible(true);
      }
      


    return (
        <WorkspaceWrapper id="workspace-wrapper">
            <canvas ref={canvasRef} {...props} onClick={e => handleClick(e)} onContextMenu={e => handleContextmenu(e)}></canvas>
            {(visible ? <CommentForm y={commentFormPosition.y} x={commentFormPosition.x}/> : null)}
        </WorkspaceWrapper>
        

    )
}

export default Workspace;