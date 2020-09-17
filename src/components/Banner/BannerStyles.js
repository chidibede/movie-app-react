import styled from "styled-components";

export const BannerDiv = styled.div`
    color: whitesmoke;
    margin-bottom: 2px;
    padding-bottom: 10px;
    

    .banner_contents{
        margin-top: 20px;
        width: 70%;
        padding: 30px;
    }

    .banner_title{
        margin-bottom: 30px;
        font-weight: bolder;
    }

    .banner_buttons{
        background-color: #3b5859;
        border: none;
        color: white;
        padding: 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        margin: 4px;
        margin-top: 10px;
        opacity: 0.7;
        border: 1px solid #3b5859;
        border-radius: 9px;

        &:hover{
            background-color: #3f5948;
            cursor: pointer;
            transition: all 0.3s ease;
            color: lightgrey;
        }
    }

    .banner_fade{
        height: 7.3rem;
        background-image: linear-gradient(
            180deg,
            transparent,
            rgba(37, 37, 37, 0.61),
            #171e26
        );
    }


`