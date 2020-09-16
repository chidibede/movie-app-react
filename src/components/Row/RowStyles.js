import styled from 'styled-components'

export const Div = styled.div`
    color: white;


    .imageRow{
        display: flex;
        overflow-y: hidden;
        overflow-x: scroll;

        &::-webkit-scrollbar {
        display: none;
        }
    }

    .image{
        object-fit: contain;
        width: 100%;
        max-height: 100px;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-right: 8px;
        padding: 4px;
        transition: transform 450ms;

        &:hover {
            transform: scale(1.10);
            opacity: 1;
        }
    }

    .imageLarge{
        object-fit: contain;
        width: 100%;
        max-height: 200px;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-right: 8px;
        transition: transform 450ms;

        &:hover {
            transform: scale(1.10);
            opacity: 1;
        }
    }
    
`