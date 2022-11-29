/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
// import { FaUserCircle } from 'react-icons/fa';
// import { AiOutlineTwitter } from 'react-icons/ai';
// import { ThemeProvider } from '@mui/material';
import jamElapsedTime from '../userComp/JamElapsedTime';
// import { palette } from '../../Styles/theme';
import UserName from '../userComp/UserName';

const Container = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const UserBox = css`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 3px;
  margin-bottom: 5px;
`;

const Time = css`
  margin-left: auto;
`;

// const JamIcon = css`
//   color: ${palette.colorGrade5};
// `;

// const UserName = css`
//   font-size: 13px;
// `;

const WrittenComment = css`
  width: 100%;
  height: fit-content;
  padding: 10px;
  border-radius: 3px;
  background-color: #fff;
`;

const ReplyComment = () => {
  return (
    <div css={Container}>
      <div css={UserBox}>
        {/* <div>
          <FaUserCircle size={15} />
        </div>
        <div css={UserName}>포도쨈</div>
        <ThemeProvider theme={palette}>
          <div css={JamIcon}>
            <AiOutlineTwitter size={16} />
          </div>
        </ThemeProvider> */}
        <UserName />
        <p css={Time}>{jamElapsedTime('2022-11-25T00:25:42')}</p>
      </div>
      <div css={WrittenComment}>
        저희 잼 하고나서 얘기하는 시간이 따로 있을까요?
      </div>
    </div>
  );
};

export default ReplyComment;
