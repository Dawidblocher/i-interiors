
import React, { useRef, useEffect, useState } from 'react'
import Img from 'src/Assets/Img/room.jpg';
import CommentForm from 'src/Components/Organisms/CommentForm/CommentForm';
import styled from 'styled-components';
import CommentPoint from 'src/Components/Atoms/CommentPoint/CommentPoint';
import CommentBox from 'src/Components/Organisms/CommentBox/CommentBox';

const comments = [{
    x:200,
    y: 200,
    title: 'title 1',
    description: 'Lorem ipsum 1'
},
{
    x:400,
    y: 400,
    title: 'title 2',
    description: 'Lorem ipsum 2'
},
{
    x:600,
    y: 600,
    title: 'title 3',
    description: 'Lorem ipsum 3'
}]



const WorkspaceWrapper = styled.div`
        position: relative;
    `

const Workspace = (props) => {

    const canvasRef = useRef(null);

    const [commentFormPosition, setCommentFormPosition] = useState({})
    const [visibleCommentForm, setVisibleCommentForm] = useState(false)

    const [commentBox, setCommentBox] = useState({})
    const [visibleCommentBox, setVisibleCommentBox] = useState(false)

    const [commentsList, setCommentsList] = useState(comments);
    

    const draw = ctx => {
        ctx.fillStyle = '#1a73e8'
        ctx.beginPath()
        var img = new Image()
        img.src = Img
        img.onload = function(){
            ctx.drawImage(img, 0, 0)
            // commentsList.forEach(comment => {
            //     ctx.beginPath()
            //     ctx.arc(comment.x, comment.y, 5, 0, 2 * Math.PI)
            //     ctx.fillStyle = 'red'
            //     ctx.fill();
            //     ctx.stroke()
            // })
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
          setVisibleCommentForm(false);
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
        setVisibleCommentForm(true);
        setVisibleCommentBox(false)
      }
      
      const handleCommentBox = (comment, visible) => {
        setCommentBox(comment)
        console.log(visible)
        setVisibleCommentBox(visible)
        setVisibleCommentForm(false);
      }
  

    return (
        <WorkspaceWrapper id="workspace-wrapper" >
            <canvas ref={canvasRef} {...props} onClick={e => {
                handleClick(e); 
                handleCommentBox({}, false)
            }} onContextMenu={e => handleContextmenu(e)}></canvas>
            {(visibleCommentForm ? <CommentForm y={commentFormPosition.y} x={commentFormPosition.x}/> : null)}
            {commentsList.map((comment,index) => <CommentPoint key={index} x={comment.x} y={comment.y} onClick={() => handleCommentBox(comment, true)} /> )}
            {(visibleCommentBox ? <CommentBox y={commentBox.y} x={commentBox.x} title={commentBox.title} description={commentBox.description}/> : null)}
        </WorkspaceWrapper>
        

    )
}

export default Workspace;