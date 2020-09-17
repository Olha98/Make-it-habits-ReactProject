import React from 'react';
import CheckListHeader from './CheckListHeader/CheckListHeader';
import style from './CheckListPage.module.css';
import CheckList from './CheckList/CheckList';
import CustomScrollbars from '../../assests/scroll/scroll';

function CheckListPage() {
  return (
    <div className={style.checkListPageContainer}>
      <CheckListHeader />
      {/* <div className={style.checkListPageScrollWrapper}> */}
      <CustomScrollbars
        style={{ height: `calc( 100vh - 110px)` }}
        className={style.checkListPageScrollWrapper}
      >
        <CheckList />
      </CustomScrollbars>
      {/* </div> */}
    </div>
  );
}

export default CheckListPage;
// =========================================================

// // <div
//   class="CheckListPage_checkListPageScrollWrapper__1sRwY"
//   style="position: relative;overflow: hidden;width: 100%;/* height: 100%; */"
// >
//   <div style="position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;">
//     <div class="CheckList_checkList__18AF2">
//       <div>
//         <div
//           data-element="habit"
//           class="CheckListItem_checkListItem__3hI5A"
//           style="border-left: 8px solid rgb(144, 241, 255);"
//         >
//           <div class="CheckListItem_checkListItemContentMainWrapper__245vt">
//             <div class="CheckListItem_checkListItemContentWrapper__1qh7w">
//               <div class="CheckListItem_checkListItemContent__3ToXi">
//                 <label class="CheckListItem_checkListItemProgressLabel__Rz85g">
//                   <span>test1</span>
//                   <progress
//                     class="CheckListItem_checkListItemProgress__n9pty"
//                     id="file"
//                     max="100"
//                     value="100"
//                   >
//                     70%
//                   </progress>
//                 </label>
//                 <p class="CheckListItem_checkListItemProgressValue__1w0di">
//                   100%
//                 </p>
//               </div>
//               <p class="CheckListItem_checkListItemProgressComment__3ErRJ">
//                 Прогресс привития привычки
//               </p>
//             </div>
//             <div class="CheckListItem_checkListButtons__3hLPl">
//               <button
//                 class="CheckListItem_checkListButton__1i8p9 CheckListItem_checkListButtonSubmit__ljbAJ"
//                 type="button"
//               >
//                 <svg
//                   width="24"
//                   height="16"
//                   viewBox="0 0 24 16"
//                   fill="none"
//                   data-element="svg"
//                 >
//                   <path
//                     d="M22 2L9.5 14L2 6.8"
//                     stroke-width="3"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   ></path>
//                 </svg>
//               </button>
//               <button
//                 class="CheckListItem_checkListButton__1i8p9 CheckListItem_checkListButtonDelete__1lyuJ"
//                 type="button"
//               >
//                 <svg
//                   width="22"
//                   height="22"
//                   viewBox="0 0 22 22"
//                   fill="none"
//                   data-element="svg"
//                 >
//                   <path
//                     d="M3 3.00049L18.9997 19.0002"
//                     stroke-width="3"
//                     stroke-linecap="round"
//                   ></path>
//                   <path
//                     d="M3 18.9995L18.9997 2.9998"
//                     stroke-width="3"
//                     stroke-linecap="round"
//                   ></path>
//                 </svg>
//               </button>
//               <button
//                 data-element="button_edit"
//                 class="CheckListItem_checkListButtonEdit__2BwEP"
//                 type="button"
//               >
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                   <path d="M15.9353 6.99789C15.8831 6.59233 15.6536 6.23964 15.3057 6.02954C14.9642 5.82362 14.5517 5.78537 14.1697 5.92796C13.8664 6.04066 13.527 5.88482 13.3892 5.57735C13.2271 5.21422 13.0268 4.86639 12.7951 4.54363C12.5941 4.26398 12.6317 3.89667 12.8814 3.69075C13.1909 3.43682 13.3635 3.06117 13.3558 2.66048C13.3474 2.25352 13.1561 1.87787 12.8292 1.63092C12.2977 1.22814 11.7175 0.892826 11.1047 0.634761C10.7255 0.475467 10.3026 0.496337 9.94574 0.693195C9.59513 0.88588 9.35582 1.22328 9.29044 1.6184C9.23686 1.93979 8.93497 2.1478 8.59131 2.11927C8.20245 2.07822 7.79686 2.07822 7.40732 2.11927C7.0588 2.1478 6.76177 1.94048 6.70888 1.61909C6.6435 1.22325 6.40487 0.88588 6.05426 0.693163C5.69599 0.496304 5.27442 0.474717 4.89459 0.634043C4.28103 0.892826 3.70086 1.22814 3.17008 1.63021C2.84384 1.87787 2.65183 2.2528 2.64417 2.65976C2.63582 3.06045 2.80904 3.43679 3.1186 3.69212C3.36903 3.89804 3.40591 4.26394 3.20485 4.54428C2.97251 4.86844 2.77216 5.21559 2.61075 5.57732C2.47232 5.88619 2.12935 6.04063 1.82328 5.92516C1.44903 5.78533 1.0379 5.82358 0.694923 6.02951C0.347087 6.23889 0.116837 6.59158 0.064663 6.99717C0.0215543 7.3304 0 7.6678 0 8.00031C0 8.33282 0.0215543 8.67022 0.0646956 9.00273C0.116869 9.40829 0.346435 9.7617 0.694271 9.97108C1.03722 10.1777 1.44906 10.2173 1.83098 10.0727C2.12873 9.96205 2.47236 10.1144 2.61081 10.4233C2.77219 10.785 2.97254 11.1328 3.20491 11.457C3.40594 11.7366 3.36838 12.1033 3.11794 12.3099C2.80907 12.5638 2.63654 12.9394 2.6442 13.3401C2.65255 13.7471 2.84387 14.1228 3.17012 14.3704C3.7002 14.7718 4.28038 15.1071 4.89463 15.3666C5.06299 15.4375 5.23966 15.4723 5.41568 15.4723C5.63621 15.4723 5.85534 15.4174 6.0536 15.3075C6.40421 15.1148 6.64353 14.7767 6.70891 14.3823C6.76248 14.0609 7.06786 13.8473 7.40804 13.8821C7.7969 13.9231 8.20248 13.9231 8.59203 13.8821C8.93778 13.848 9.2369 14.0609 9.29047 14.3823C9.35657 14.7774 9.59517 15.1148 9.94578 15.3075C10.304 15.505 10.7256 15.5252 11.1047 15.3666C11.7183 15.1078 12.2985 14.7725 12.8292 14.3704C13.1555 14.1228 13.3468 13.7471 13.3551 13.3401C13.3628 12.9394 13.1896 12.5638 12.8793 12.3092C12.6296 12.1033 12.5927 11.7374 12.7938 11.457C13.0261 11.1342 13.2258 10.7857 13.3878 10.424C13.527 10.1144 13.872 9.96276 14.1684 10.0727L14.176 10.0755C14.5517 10.2174 14.9635 10.1777 15.3051 9.9718C15.6536 9.7617 15.8825 9.409 15.9347 9.00414C15.9785 8.67299 16 8.33562 16 8.00031C16 7.66499 15.9784 7.32763 15.9353 6.99789ZM7.99998 11.1307C6.27407 11.1307 4.86955 9.72622 4.86955 8.00031C4.86955 6.2744 6.27407 4.86988 7.99998 4.86988C9.72589 4.86988 11.1304 6.2744 11.1304 8.00031C11.1304 9.72622 9.72589 11.1307 7.99998 11.1307Z"></path>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div
//           data-element="habit"
//           class="CheckListItem_checkListItem__3hI5A"
//           style="border-left: 8px solid rgb(106, 78, 209);"
//         >
//           <div class="CheckListItem_checkListItemContentMainWrapper__245vt">
//             <div class="CheckListItem_checkListItemContentWrapper__1qh7w">
//               <div class="CheckListItem_checkListItemContent__3ToXi">
//                 <label class="CheckListItem_checkListItemProgressLabel__Rz85g">
//                   <span>test2</span>
//                   <progress
//                     class="CheckListItem_checkListItemProgress__n9pty"
//                     id="file"
//                     max="100"
//                     value="100"
//                   >
//                     70%
//                   </progress>
//                 </label>
//                 <p class="CheckListItem_checkListItemProgressValue__1w0di">
//                   100%
//                 </p>
//               </div>
//               <p class="CheckListItem_checkListItemProgressComment__3ErRJ">
//                 Прогресс привития привычки
//               </p>
//             </div>
//             <div class="CheckListItem_checkListButtons__3hLPl">
//               <button
//                 class="CheckListItem_checkListButton__1i8p9 CheckListItem_checkListButtonSubmit__ljbAJ"
//                 type="button"
//               >
//                 <svg
//                   width="24"
//                   height="16"
//                   viewBox="0 0 24 16"
//                   fill="none"
//                   data-element="svg"
//                 >
//                   <path
//                     d="M22 2L9.5 14L2 6.8"
//                     stroke-width="3"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   ></path>
//                 </svg>
//               </button>
//               <button
//                 class="CheckListItem_checkListButton__1i8p9 CheckListItem_checkListButtonDelete__1lyuJ"
//                 type="button"
//               >
//                 <svg
//                   width="22"
//                   height="22"
//                   viewBox="0 0 22 22"
//                   fill="none"
//                   data-element="svg"
//                 >
//                   <path
//                     d="M3 3.00049L18.9997 19.0002"
//                     stroke-width="3"
//                     stroke-linecap="round"
//                   ></path>
//                   <path
//                     d="M3 18.9995L18.9997 2.9998"
//                     stroke-width="3"
//                     stroke-linecap="round"
//                   ></path>
//                 </svg>
//               </button>
//               <button
//                 data-element="button_edit"
//                 class="CheckListItem_checkListButtonEdit__2BwEP"
//                 type="button"
//               >
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                   <path d="M15.9353 6.99789C15.8831 6.59233 15.6536 6.23964 15.3057 6.02954C14.9642 5.82362 14.5517 5.78537 14.1697 5.92796C13.8664 6.04066 13.527 5.88482 13.3892 5.57735C13.2271 5.21422 13.0268 4.86639 12.7951 4.54363C12.5941 4.26398 12.6317 3.89667 12.8814 3.69075C13.1909 3.43682 13.3635 3.06117 13.3558 2.66048C13.3474 2.25352 13.1561 1.87787 12.8292 1.63092C12.2977 1.22814 11.7175 0.892826 11.1047 0.634761C10.7255 0.475467 10.3026 0.496337 9.94574 0.693195C9.59513 0.88588 9.35582 1.22328 9.29044 1.6184C9.23686 1.93979 8.93497 2.1478 8.59131 2.11927C8.20245 2.07822 7.79686 2.07822 7.40732 2.11927C7.0588 2.1478 6.76177 1.94048 6.70888 1.61909C6.6435 1.22325 6.40487 0.88588 6.05426 0.693163C5.69599 0.496304 5.27442 0.474717 4.89459 0.634043C4.28103 0.892826 3.70086 1.22814 3.17008 1.63021C2.84384 1.87787 2.65183 2.2528 2.64417 2.65976C2.63582 3.06045 2.80904 3.43679 3.1186 3.69212C3.36903 3.89804 3.40591 4.26394 3.20485 4.54428C2.97251 4.86844 2.77216 5.21559 2.61075 5.57732C2.47232 5.88619 2.12935 6.04063 1.82328 5.92516C1.44903 5.78533 1.0379 5.82358 0.694923 6.02951C0.347087 6.23889 0.116837 6.59158 0.064663 6.99717C0.0215543 7.3304 0 7.6678 0 8.00031C0 8.33282 0.0215543 8.67022 0.0646956 9.00273C0.116869 9.40829 0.346435 9.7617 0.694271 9.97108C1.03722 10.1777 1.44906 10.2173 1.83098 10.0727C2.12873 9.96205 2.47236 10.1144 2.61081 10.4233C2.77219 10.785 2.97254 11.1328 3.20491 11.457C3.40594 11.7366 3.36838 12.1033 3.11794 12.3099C2.80907 12.5638 2.63654 12.9394 2.6442 13.3401C2.65255 13.7471 2.84387 14.1228 3.17012 14.3704C3.7002 14.7718 4.28038 15.1071 4.89463 15.3666C5.06299 15.4375 5.23966 15.4723 5.41568 15.4723C5.63621 15.4723 5.85534 15.4174 6.0536 15.3075C6.40421 15.1148 6.64353 14.7767 6.70891 14.3823C6.76248 14.0609 7.06786 13.8473 7.40804 13.8821C7.7969 13.9231 8.20248 13.9231 8.59203 13.8821C8.93778 13.848 9.2369 14.0609 9.29047 14.3823C9.35657 14.7774 9.59517 15.1148 9.94578 15.3075C10.304 15.505 10.7256 15.5252 11.1047 15.3666C11.7183 15.1078 12.2985 14.7725 12.8292 14.3704C13.1555 14.1228 13.3468 13.7471 13.3551 13.3401C13.3628 12.9394 13.1896 12.5638 12.8793 12.3092C12.6296 12.1033 12.5927 11.7374 12.7938 11.457C13.0261 11.1342 13.2258 10.7857 13.3878 10.424C13.527 10.1144 13.872 9.96276 14.1684 10.0727L14.176 10.0755C14.5517 10.2174 14.9635 10.1777 15.3051 9.9718C15.6536 9.7617 15.8825 9.409 15.9347 9.00414C15.9785 8.67299 16 8.33562 16 8.00031C16 7.66499 15.9784 7.32763 15.9353 6.99789ZM7.99998 11.1307C6.27407 11.1307 4.86955 9.72622 4.86955 8.00031C4.86955 6.2744 6.27407 4.86988 7.99998 4.86988C9.72589 4.86988 11.1304 6.2744 11.1304 8.00031C11.1304 9.72622 9.72589 11.1307 7.99998 11.1307Z"></path>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div
//           data-element="habit"
//           class="CheckListItem_checkListItem__3hI5A"
//           style="border-left: 8px solid rgb(248, 193, 2);"
//         >
//           <div class="CheckListItem_checkListItemContentMainWrapper__245vt">
//             <div class="CheckListItem_checkListItemContentWrapper__1qh7w">
//               <div class="CheckListItem_checkListItemContent__3ToXi">
//                 <label class="CheckListItem_checkListItemProgressLabel__Rz85g">
//                   <span>test3</span>
//                   <progress
//                     class="CheckListItem_checkListItemProgress__n9pty"
//                     id="file"
//                     max="100"
//                     value="100"
//                   >
//                     70%
//                   </progress>
//                 </label>
//                 <p class="CheckListItem_checkListItemProgressValue__1w0di">
//                   100%
//                 </p>
//               </div>
//               <p class="CheckListItem_checkListItemProgressComment__3ErRJ">
//                 Прогресс привития привычки
//               </p>
//             </div>
//             <div class="CheckListItem_checkListButtons__3hLPl">
//               <button
//                 class="CheckListItem_checkListButton__1i8p9 CheckListItem_checkListButtonSubmit__ljbAJ"
//                 type="button"
//               >
//                 <svg
//                   width="24"
//                   height="16"
//                   viewBox="0 0 24 16"
//                   fill="none"
//                   data-element="svg"
//                 >
//                   <path
//                     d="M22 2L9.5 14L2 6.8"
//                     stroke-width="3"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   ></path>
//                 </svg>
//               </button>
//               <button
//                 class="CheckListItem_checkListButton__1i8p9 CheckListItem_checkListButtonDelete__1lyuJ"
//                 type="button"
//               >
//                 <svg
//                   width="22"
//                   height="22"
//                   viewBox="0 0 22 22"
//                   fill="none"
//                   data-element="svg"
//                 >
//                   <path
//                     d="M3 3.00049L18.9997 19.0002"
//                     stroke-width="3"
//                     stroke-linecap="round"
//                   ></path>
//                   <path
//                     d="M3 18.9995L18.9997 2.9998"
//                     stroke-width="3"
//                     stroke-linecap="round"
//                   ></path>
//                 </svg>
//               </button>
//               <button
//                 data-element="button_edit"
//                 class="CheckListItem_checkListButtonEdit__2BwEP"
//                 type="button"
//               >
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                   <path d="M15.9353 6.99789C15.8831 6.59233 15.6536 6.23964 15.3057 6.02954C14.9642 5.82362 14.5517 5.78537 14.1697 5.92796C13.8664 6.04066 13.527 5.88482 13.3892 5.57735C13.2271 5.21422 13.0268 4.86639 12.7951 4.54363C12.5941 4.26398 12.6317 3.89667 12.8814 3.69075C13.1909 3.43682 13.3635 3.06117 13.3558 2.66048C13.3474 2.25352 13.1561 1.87787 12.8292 1.63092C12.2977 1.22814 11.7175 0.892826 11.1047 0.634761C10.7255 0.475467 10.3026 0.496337 9.94574 0.693195C9.59513 0.88588 9.35582 1.22328 9.29044 1.6184C9.23686 1.93979 8.93497 2.1478 8.59131 2.11927C8.20245 2.07822 7.79686 2.07822 7.40732 2.11927C7.0588 2.1478 6.76177 1.94048 6.70888 1.61909C6.6435 1.22325 6.40487 0.88588 6.05426 0.693163C5.69599 0.496304 5.27442 0.474717 4.89459 0.634043C4.28103 0.892826 3.70086 1.22814 3.17008 1.63021C2.84384 1.87787 2.65183 2.2528 2.64417 2.65976C2.63582 3.06045 2.80904 3.43679 3.1186 3.69212C3.36903 3.89804 3.40591 4.26394 3.20485 4.54428C2.97251 4.86844 2.77216 5.21559 2.61075 5.57732C2.47232 5.88619 2.12935 6.04063 1.82328 5.92516C1.44903 5.78533 1.0379 5.82358 0.694923 6.02951C0.347087 6.23889 0.116837 6.59158 0.064663 6.99717C0.0215543 7.3304 0 7.6678 0 8.00031C0 8.33282 0.0215543 8.67022 0.0646956 9.00273C0.116869 9.40829 0.346435 9.7617 0.694271 9.97108C1.03722 10.1777 1.44906 10.2173 1.83098 10.0727C2.12873 9.96205 2.47236 10.1144 2.61081 10.4233C2.77219 10.785 2.97254 11.1328 3.20491 11.457C3.40594 11.7366 3.36838 12.1033 3.11794 12.3099C2.80907 12.5638 2.63654 12.9394 2.6442 13.3401C2.65255 13.7471 2.84387 14.1228 3.17012 14.3704C3.7002 14.7718 4.28038 15.1071 4.89463 15.3666C5.06299 15.4375 5.23966 15.4723 5.41568 15.4723C5.63621 15.4723 5.85534 15.4174 6.0536 15.3075C6.40421 15.1148 6.64353 14.7767 6.70891 14.3823C6.76248 14.0609 7.06786 13.8473 7.40804 13.8821C7.7969 13.9231 8.20248 13.9231 8.59203 13.8821C8.93778 13.848 9.2369 14.0609 9.29047 14.3823C9.35657 14.7774 9.59517 15.1148 9.94578 15.3075C10.304 15.505 10.7256 15.5252 11.1047 15.3666C11.7183 15.1078 12.2985 14.7725 12.8292 14.3704C13.1555 14.1228 13.3468 13.7471 13.3551 13.3401C13.3628 12.9394 13.1896 12.5638 12.8793 12.3092C12.6296 12.1033 12.5927 11.7374 12.7938 11.457C13.0261 11.1342 13.2258 10.7857 13.3878 10.424C13.527 10.1144 13.872 9.96276 14.1684 10.0727L14.176 10.0755C14.5517 10.2174 14.9635 10.1777 15.3051 9.9718C15.6536 9.7617 15.8825 9.409 15.9347 9.00414C15.9785 8.67299 16 8.33562 16 8.00031C16 7.66499 15.9784 7.32763 15.9353 6.99789ZM7.99998 11.1307C6.27407 11.1307 4.86955 9.72622 4.86955 8.00031C4.86955 6.2744 6.27407 4.86988 7.99998 4.86988C9.72589 4.86988 11.1304 6.2744 11.1304 8.00031C11.1304 9.72622 9.72589 11.1307 7.99998 11.1307Z"></path>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div
//           data-element="habit"
//           class="CheckListItem_checkListItem__3hI5A"
//           style="border-left: 8px solid rgb(46, 13, 132);"
//         >
//           <div class="CheckListItem_checkListItemContentMainWrapper__245vt">
//             <div class="CheckListItem_checkListItemContentWrapper__1qh7w">
//               <div class="CheckListItem_checkListItemContent__3ToXi">
//                 <label class="CheckListItem_checkListItemProgressLabel__Rz85g">
//                   <span>test4</span>
//                   <progress
//                     class="CheckListItem_checkListItemProgress__n9pty"
//                     id="file"
//                     max="100"
//                     value="58"
//                   >
//                     70%
//                   </progress>
//                 </label>
//                 <p class="CheckListItem_checkListItemProgressValue__1w0di">
//                   58%
//                 </p>
//               </div>
//               <p class="CheckListItem_checkListItemProgressComment__3ErRJ">
//                 Прогресс привития привычки
//               </p>
//             </div>
//             <div class="CheckListItem_checkListButtons__3hLPl">
//               <button
//                 class="CheckListItem_checkListButton__1i8p9 CheckListItem_checkListButtonSubmit__ljbAJ"
//                 type="button"
//               >
//                 <svg
//                   width="24"
//                   height="16"
//                   viewBox="0 0 24 16"
//                   fill="none"
//                   data-element="svg"
//                 >
//                   <path
//                     d="M22 2L9.5 14L2 6.8"
//                     stroke-width="3"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   ></path>
//                 </svg>
//               </button>
//               <button
//                 class="CheckListItem_checkListButton__1i8p9 CheckListItem_checkListButtonDelete__1lyuJ"
//                 type="button"
//               >
//                 <svg
//                   width="22"
//                   height="22"
//                   viewBox="0 0 22 22"
//                   fill="none"
//                   data-element="svg"
//                 >
//                   <path
//                     d="M3 3.00049L18.9997 19.0002"
//                     stroke-width="3"
//                     stroke-linecap="round"
//                   ></path>
//                   <path
//                     d="M3 18.9995L18.9997 2.9998"
//                     stroke-width="3"
//                     stroke-linecap="round"
//                   ></path>
//                 </svg>
//               </button>
//               <button
//                 data-element="button_edit"
//                 class="CheckListItem_checkListButtonEdit__2BwEP"
//                 type="button"
//               >
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                   <path d="M15.9353 6.99789C15.8831 6.59233 15.6536 6.23964 15.3057 6.02954C14.9642 5.82362 14.5517 5.78537 14.1697 5.92796C13.8664 6.04066 13.527 5.88482 13.3892 5.57735C13.2271 5.21422 13.0268 4.86639 12.7951 4.54363C12.5941 4.26398 12.6317 3.89667 12.8814 3.69075C13.1909 3.43682 13.3635 3.06117 13.3558 2.66048C13.3474 2.25352 13.1561 1.87787 12.8292 1.63092C12.2977 1.22814 11.7175 0.892826 11.1047 0.634761C10.7255 0.475467 10.3026 0.496337 9.94574 0.693195C9.59513 0.88588 9.35582 1.22328 9.29044 1.6184C9.23686 1.93979 8.93497 2.1478 8.59131 2.11927C8.20245 2.07822 7.79686 2.07822 7.40732 2.11927C7.0588 2.1478 6.76177 1.94048 6.70888 1.61909C6.6435 1.22325 6.40487 0.88588 6.05426 0.693163C5.69599 0.496304 5.27442 0.474717 4.89459 0.634043C4.28103 0.892826 3.70086 1.22814 3.17008 1.63021C2.84384 1.87787 2.65183 2.2528 2.64417 2.65976C2.63582 3.06045 2.80904 3.43679 3.1186 3.69212C3.36903 3.89804 3.40591 4.26394 3.20485 4.54428C2.97251 4.86844 2.77216 5.21559 2.61075 5.57732C2.47232 5.88619 2.12935 6.04063 1.82328 5.92516C1.44903 5.78533 1.0379 5.82358 0.694923 6.02951C0.347087 6.23889 0.116837 6.59158 0.064663 6.99717C0.0215543 7.3304 0 7.6678 0 8.00031C0 8.33282 0.0215543 8.67022 0.0646956 9.00273C0.116869 9.40829 0.346435 9.7617 0.694271 9.97108C1.03722 10.1777 1.44906 10.2173 1.83098 10.0727C2.12873 9.96205 2.47236 10.1144 2.61081 10.4233C2.77219 10.785 2.97254 11.1328 3.20491 11.457C3.40594 11.7366 3.36838 12.1033 3.11794 12.3099C2.80907 12.5638 2.63654 12.9394 2.6442 13.3401C2.65255 13.7471 2.84387 14.1228 3.17012 14.3704C3.7002 14.7718 4.28038 15.1071 4.89463 15.3666C5.06299 15.4375 5.23966 15.4723 5.41568 15.4723C5.63621 15.4723 5.85534 15.4174 6.0536 15.3075C6.40421 15.1148 6.64353 14.7767 6.70891 14.3823C6.76248 14.0609 7.06786 13.8473 7.40804 13.8821C7.7969 13.9231 8.20248 13.9231 8.59203 13.8821C8.93778 13.848 9.2369 14.0609 9.29047 14.3823C9.35657 14.7774 9.59517 15.1148 9.94578 15.3075C10.304 15.505 10.7256 15.5252 11.1047 15.3666C11.7183 15.1078 12.2985 14.7725 12.8292 14.3704C13.1555 14.1228 13.3468 13.7471 13.3551 13.3401C13.3628 12.9394 13.1896 12.5638 12.8793 12.3092C12.6296 12.1033 12.5927 11.7374 12.7938 11.457C13.0261 11.1342 13.2258 10.7857 13.3878 10.424C13.527 10.1144 13.872 9.96276 14.1684 10.0727L14.176 10.0755C14.5517 10.2174 14.9635 10.1777 15.3051 9.9718C15.6536 9.7617 15.8825 9.409 15.9347 9.00414C15.9785 8.67299 16 8.33562 16 8.00031C16 7.66499 15.9784 7.32763 15.9353 6.99789ZM7.99998 11.1307C6.27407 11.1307 4.86955 9.72622 4.86955 8.00031C4.86955 6.2744 6.27407 4.86988 7.99998 4.86988C9.72589 4.86988 11.1304 6.2744 11.1304 8.00031C11.1304 9.72622 9.72589 11.1307 7.99998 11.1307Z"></path>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div
//           data-element="habit"
//           class="CheckListItem_checkListItem__3hI5A"
//           style="border-left: 8px solid rgb(124, 235, 100);"
//         >
//           <div class="CheckListItem_checkListItemContentMainWrapper__245vt">
//             <div class="CheckListItem_checkListItemContentWrapper__1qh7w">
//               <div class="CheckListItem_checkListItemContent__3ToXi">
//                 <label class="CheckListItem_checkListItemProgressLabel__Rz85g">
//                   <span>test5</span>
//                   <progress
//                     class="CheckListItem_checkListItemProgress__n9pty"
//                     id="file"
//                     max="100"
//                     value="50"
//                   >
//                     70%
//                   </progress>
//                 </label>
//                 <p class="CheckListItem_checkListItemProgressValue__1w0di">
//                   50%
//                 </p>
//               </div>
//               <p class="CheckListItem_checkListItemProgressComment__3ErRJ">
//                 Прогресс привития привычки
//               </p>
//             </div>
//             <div class="CheckListItem_checkListButtons__3hLPl">
//               <button
//                 class="CheckListItem_checkListButton__1i8p9 CheckListItem_checkListButtonSubmit__ljbAJ"
//                 type="button"
//               >
//                 <svg
//                   width="24"
//                   height="16"
//                   viewBox="0 0 24 16"
//                   fill="none"
//                   data-element="svg"
//                 >
//                   <path
//                     d="M22 2L9.5 14L2 6.8"
//                     stroke-width="3"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   ></path>
//                 </svg>
//               </button>
//               <button
//                 class="CheckListItem_checkListButton__1i8p9 CheckListItem_checkListButtonDelete__1lyuJ"
//                 type="button"
//               >
//                 <svg
//                   width="22"
//                   height="22"
//                   viewBox="0 0 22 22"
//                   fill="none"
//                   data-element="svg"
//                 >
//                   <path
//                     d="M3 3.00049L18.9997 19.0002"
//                     stroke-width="3"
//                     stroke-linecap="round"
//                   ></path>
//                   <path
//                     d="M3 18.9995L18.9997 2.9998"
//                     stroke-width="3"
//                     stroke-linecap="round"
//                   ></path>
//                 </svg>
//               </button>
//               <button
//                 data-element="button_edit"
//                 class="CheckListItem_checkListButtonEdit__2BwEP"
//                 type="button"
//               >
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                   <path d="M15.9353 6.99789C15.8831 6.59233 15.6536 6.23964 15.3057 6.02954C14.9642 5.82362 14.5517 5.78537 14.1697 5.92796C13.8664 6.04066 13.527 5.88482 13.3892 5.57735C13.2271 5.21422 13.0268 4.86639 12.7951 4.54363C12.5941 4.26398 12.6317 3.89667 12.8814 3.69075C13.1909 3.43682 13.3635 3.06117 13.3558 2.66048C13.3474 2.25352 13.1561 1.87787 12.8292 1.63092C12.2977 1.22814 11.7175 0.892826 11.1047 0.634761C10.7255 0.475467 10.3026 0.496337 9.94574 0.693195C9.59513 0.88588 9.35582 1.22328 9.29044 1.6184C9.23686 1.93979 8.93497 2.1478 8.59131 2.11927C8.20245 2.07822 7.79686 2.07822 7.40732 2.11927C7.0588 2.1478 6.76177 1.94048 6.70888 1.61909C6.6435 1.22325 6.40487 0.88588 6.05426 0.693163C5.69599 0.496304 5.27442 0.474717 4.89459 0.634043C4.28103 0.892826 3.70086 1.22814 3.17008 1.63021C2.84384 1.87787 2.65183 2.2528 2.64417 2.65976C2.63582 3.06045 2.80904 3.43679 3.1186 3.69212C3.36903 3.89804 3.40591 4.26394 3.20485 4.54428C2.97251 4.86844 2.77216 5.21559 2.61075 5.57732C2.47232 5.88619 2.12935 6.04063 1.82328 5.92516C1.44903 5.78533 1.0379 5.82358 0.694923 6.02951C0.347087 6.23889 0.116837 6.59158 0.064663 6.99717C0.0215543 7.3304 0 7.6678 0 8.00031C0 8.33282 0.0215543 8.67022 0.0646956 9.00273C0.116869 9.40829 0.346435 9.7617 0.694271 9.97108C1.03722 10.1777 1.44906 10.2173 1.83098 10.0727C2.12873 9.96205 2.47236 10.1144 2.61081 10.4233C2.77219 10.785 2.97254 11.1328 3.20491 11.457C3.40594 11.7366 3.36838 12.1033 3.11794 12.3099C2.80907 12.5638 2.63654 12.9394 2.6442 13.3401C2.65255 13.7471 2.84387 14.1228 3.17012 14.3704C3.7002 14.7718 4.28038 15.1071 4.89463 15.3666C5.06299 15.4375 5.23966 15.4723 5.41568 15.4723C5.63621 15.4723 5.85534 15.4174 6.0536 15.3075C6.40421 15.1148 6.64353 14.7767 6.70891 14.3823C6.76248 14.0609 7.06786 13.8473 7.40804 13.8821C7.7969 13.9231 8.20248 13.9231 8.59203 13.8821C8.93778 13.848 9.2369 14.0609 9.29047 14.3823C9.35657 14.7774 9.59517 15.1148 9.94578 15.3075C10.304 15.505 10.7256 15.5252 11.1047 15.3666C11.7183 15.1078 12.2985 14.7725 12.8292 14.3704C13.1555 14.1228 13.3468 13.7471 13.3551 13.3401C13.3628 12.9394 13.1896 12.5638 12.8793 12.3092C12.6296 12.1033 12.5927 11.7374 12.7938 11.457C13.0261 11.1342 13.2258 10.7857 13.3878 10.424C13.527 10.1144 13.872 9.96276 14.1684 10.0727L14.176 10.0755C14.5517 10.2174 14.9635 10.1777 15.3051 9.9718C15.6536 9.7617 15.8825 9.409 15.9347 9.00414C15.9785 8.67299 16 8.33562 16 8.00031C16 7.66499 15.9784 7.32763 15.9353 6.99789ZM7.99998 11.1307C6.27407 11.1307 4.86955 9.72622 4.86955 8.00031C4.86955 6.2744 6.27407 4.86988 7.99998 4.86988C9.72589 4.86988 11.1304 6.2744 11.1304 8.00031C11.1304 9.72622 9.72589 11.1307 7.99998 11.1307Z"></path>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div
//           data-element="habit"
//           class="CheckListItem_checkListItem__3hI5A"
//           style="border-left: 8px solid rgb(252, 42, 96);"
//         >
//           <div class="CheckListItem_checkListItemContentMainWrapper__245vt">
//             <div class="CheckListItem_checkListItemContentWrapper__1qh7w">
//               <div class="CheckListItem_checkListItemContent__3ToXi">
//                 <label class="CheckListItem_checkListItemProgressLabel__Rz85g">
//                   <span>test6</span>
//                   <progress
//                     class="CheckListItem_checkListItemProgress__n9pty"
//                     id="file"
//                     max="100"
//                     value="71"
//                   >
//                     70%
//                   </progress>
//                 </label>
//                 <p class="CheckListItem_checkListItemProgressValue__1w0di">
//                   71%
//                 </p>
//               </div>
//               <p class="CheckListItem_checkListItemProgressComment__3ErRJ">
//                 Прогресс привития привычки
//               </p>
//             </div>
//             <div class="CheckListItem_checkListButtons__3hLPl">
//               <button
//                 class="CheckListItem_checkListButton__1i8p9 CheckListItem_checkListButtonSubmit__ljbAJ"
//                 type="button"
//               >
//                 <svg
//                   width="24"
//                   height="16"
//                   viewBox="0 0 24 16"
//                   fill="none"
//                   data-element="svg"
//                 >
//                   <path
//                     d="M22 2L9.5 14L2 6.8"
//                     stroke-width="3"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   ></path>
//                 </svg>
//               </button>
//               <button
//                 class="CheckListItem_checkListButton__1i8p9 CheckListItem_checkListButtonDelete__1lyuJ"
//                 type="button"
//               >
//                 <svg
//                   width="22"
//                   height="22"
//                   viewBox="0 0 22 22"
//                   fill="none"
//                   data-element="svg"
//                 >
//                   <path
//                     d="M3 3.00049L18.9997 19.0002"
//                     stroke-width="3"
//                     stroke-linecap="round"
//                   ></path>
//                   <path
//                     d="M3 18.9995L18.9997 2.9998"
//                     stroke-width="3"
//                     stroke-linecap="round"
//                   ></path>
//                 </svg>
//               </button>
//               <button
//                 data-element="button_edit"
//                 class="CheckListItem_checkListButtonEdit__2BwEP"
//                 type="button"
//               >
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                   <path d="M15.9353 6.99789C15.8831 6.59233 15.6536 6.23964 15.3057 6.02954C14.9642 5.82362 14.5517 5.78537 14.1697 5.92796C13.8664 6.04066 13.527 5.88482 13.3892 5.57735C13.2271 5.21422 13.0268 4.86639 12.7951 4.54363C12.5941 4.26398 12.6317 3.89667 12.8814 3.69075C13.1909 3.43682 13.3635 3.06117 13.3558 2.66048C13.3474 2.25352 13.1561 1.87787 12.8292 1.63092C12.2977 1.22814 11.7175 0.892826 11.1047 0.634761C10.7255 0.475467 10.3026 0.496337 9.94574 0.693195C9.59513 0.88588 9.35582 1.22328 9.29044 1.6184C9.23686 1.93979 8.93497 2.1478 8.59131 2.11927C8.20245 2.07822 7.79686 2.07822 7.40732 2.11927C7.0588 2.1478 6.76177 1.94048 6.70888 1.61909C6.6435 1.22325 6.40487 0.88588 6.05426 0.693163C5.69599 0.496304 5.27442 0.474717 4.89459 0.634043C4.28103 0.892826 3.70086 1.22814 3.17008 1.63021C2.84384 1.87787 2.65183 2.2528 2.64417 2.65976C2.63582 3.06045 2.80904 3.43679 3.1186 3.69212C3.36903 3.89804 3.40591 4.26394 3.20485 4.54428C2.97251 4.86844 2.77216 5.21559 2.61075 5.57732C2.47232 5.88619 2.12935 6.04063 1.82328 5.92516C1.44903 5.78533 1.0379 5.82358 0.694923 6.02951C0.347087 6.23889 0.116837 6.59158 0.064663 6.99717C0.0215543 7.3304 0 7.6678 0 8.00031C0 8.33282 0.0215543 8.67022 0.0646956 9.00273C0.116869 9.40829 0.346435 9.7617 0.694271 9.97108C1.03722 10.1777 1.44906 10.2173 1.83098 10.0727C2.12873 9.96205 2.47236 10.1144 2.61081 10.4233C2.77219 10.785 2.97254 11.1328 3.20491 11.457C3.40594 11.7366 3.36838 12.1033 3.11794 12.3099C2.80907 12.5638 2.63654 12.9394 2.6442 13.3401C2.65255 13.7471 2.84387 14.1228 3.17012 14.3704C3.7002 14.7718 4.28038 15.1071 4.89463 15.3666C5.06299 15.4375 5.23966 15.4723 5.41568 15.4723C5.63621 15.4723 5.85534 15.4174 6.0536 15.3075C6.40421 15.1148 6.64353 14.7767 6.70891 14.3823C6.76248 14.0609 7.06786 13.8473 7.40804 13.8821C7.7969 13.9231 8.20248 13.9231 8.59203 13.8821C8.93778 13.848 9.2369 14.0609 9.29047 14.3823C9.35657 14.7774 9.59517 15.1148 9.94578 15.3075C10.304 15.505 10.7256 15.5252 11.1047 15.3666C11.7183 15.1078 12.2985 14.7725 12.8292 14.3704C13.1555 14.1228 13.3468 13.7471 13.3551 13.3401C13.3628 12.9394 13.1896 12.5638 12.8793 12.3092C12.6296 12.1033 12.5927 11.7374 12.7938 11.457C13.0261 11.1342 13.2258 10.7857 13.3878 10.424C13.527 10.1144 13.872 9.96276 14.1684 10.0727L14.176 10.0755C14.5517 10.2174 14.9635 10.1777 15.3051 9.9718C15.6536 9.7617 15.8825 9.409 15.9347 9.00414C15.9785 8.67299 16 8.33562 16 8.00031C16 7.66499 15.9784 7.32763 15.9353 6.99789ZM7.99998 11.1307C6.27407 11.1307 4.86955 9.72622 4.86955 8.00031C4.86955 6.2744 6.27407 4.86988 7.99998 4.86988C9.72589 4.86988 11.1304 6.2744 11.1304 8.00031C11.1304 9.72622 9.72589 11.1307 7.99998 11.1307Z"></path>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div
//           data-element="habit"
//           class="CheckListItem_checkListItem__3hI5A"
//           style="border-left: 8px solid rgb(221, 131, 49);"
//         >
//           <div class="CheckListItem_checkListItemContentMainWrapper__245vt">
//             <div class="CheckListItem_checkListItemContentWrapper__1qh7w">
//               <div class="CheckListItem_checkListItemContent__3ToXi">
//                 <label class="CheckListItem_checkListItemProgressLabel__Rz85g">
//                   <span>hgfdhfghfg</span>
//                   <progress
//                     class="CheckListItem_checkListItemProgress__n9pty"
//                     id="file"
//                     max="100"
//                     value="100"
//                   >
//                     70%
//                   </progress>
//                 </label>
//                 <p class="CheckListItem_checkListItemProgressValue__1w0di">
//                   100%
//                 </p>
//               </div>
//               <p class="CheckListItem_checkListItemProgressComment__3ErRJ">
//                 Прогресс привития привычки
//               </p>
//             </div>
//             <div class="CheckListItem_checkListButtons__3hLPl">
//               <button
//                 class="CheckListItem_checkListButton__1i8p9 CheckListItem_checkListButtonSubmit__ljbAJ"
//                 type="button"
//               >
//                 <svg
//                   width="24"
//                   height="16"
//                   viewBox="0 0 24 16"
//                   fill="none"
//                   data-element="svg"
//                 >
//                   <path
//                     d="M22 2L9.5 14L2 6.8"
//                     stroke-width="3"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   ></path>
//                 </svg>
//               </button>
//               <button
//                 class="CheckListItem_checkListButton__1i8p9 CheckListItem_checkListButtonDelete__1lyuJ"
//                 type="button"
//               >
//                 <svg
//                   width="22"
//                   height="22"
//                   viewBox="0 0 22 22"
//                   fill="none"
//                   data-element="svg"
//                 >
//                   <path
//                     d="M3 3.00049L18.9997 19.0002"
//                     stroke-width="3"
//                     stroke-linecap="round"
//                   ></path>
//                   <path
//                     d="M3 18.9995L18.9997 2.9998"
//                     stroke-width="3"
//                     stroke-linecap="round"
//                   ></path>
//                 </svg>
//               </button>
//               <button
//                 data-element="button_edit"
//                 class="CheckListItem_checkListButtonEdit__2BwEP"
//                 type="button"
//               >
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                   <path d="M15.9353 6.99789C15.8831 6.59233 15.6536 6.23964 15.3057 6.02954C14.9642 5.82362 14.5517 5.78537 14.1697 5.92796C13.8664 6.04066 13.527 5.88482 13.3892 5.57735C13.2271 5.21422 13.0268 4.86639 12.7951 4.54363C12.5941 4.26398 12.6317 3.89667 12.8814 3.69075C13.1909 3.43682 13.3635 3.06117 13.3558 2.66048C13.3474 2.25352 13.1561 1.87787 12.8292 1.63092C12.2977 1.22814 11.7175 0.892826 11.1047 0.634761C10.7255 0.475467 10.3026 0.496337 9.94574 0.693195C9.59513 0.88588 9.35582 1.22328 9.29044 1.6184C9.23686 1.93979 8.93497 2.1478 8.59131 2.11927C8.20245 2.07822 7.79686 2.07822 7.40732 2.11927C7.0588 2.1478 6.76177 1.94048 6.70888 1.61909C6.6435 1.22325 6.40487 0.88588 6.05426 0.693163C5.69599 0.496304 5.27442 0.474717 4.89459 0.634043C4.28103 0.892826 3.70086 1.22814 3.17008 1.63021C2.84384 1.87787 2.65183 2.2528 2.64417 2.65976C2.63582 3.06045 2.80904 3.43679 3.1186 3.69212C3.36903 3.89804 3.40591 4.26394 3.20485 4.54428C2.97251 4.86844 2.77216 5.21559 2.61075 5.57732C2.47232 5.88619 2.12935 6.04063 1.82328 5.92516C1.44903 5.78533 1.0379 5.82358 0.694923 6.02951C0.347087 6.23889 0.116837 6.59158 0.064663 6.99717C0.0215543 7.3304 0 7.6678 0 8.00031C0 8.33282 0.0215543 8.67022 0.0646956 9.00273C0.116869 9.40829 0.346435 9.7617 0.694271 9.97108C1.03722 10.1777 1.44906 10.2173 1.83098 10.0727C2.12873 9.96205 2.47236 10.1144 2.61081 10.4233C2.77219 10.785 2.97254 11.1328 3.20491 11.457C3.40594 11.7366 3.36838 12.1033 3.11794 12.3099C2.80907 12.5638 2.63654 12.9394 2.6442 13.3401C2.65255 13.7471 2.84387 14.1228 3.17012 14.3704C3.7002 14.7718 4.28038 15.1071 4.89463 15.3666C5.06299 15.4375 5.23966 15.4723 5.41568 15.4723C5.63621 15.4723 5.85534 15.4174 6.0536 15.3075C6.40421 15.1148 6.64353 14.7767 6.70891 14.3823C6.76248 14.0609 7.06786 13.8473 7.40804 13.8821C7.7969 13.9231 8.20248 13.9231 8.59203 13.8821C8.93778 13.848 9.2369 14.0609 9.29047 14.3823C9.35657 14.7774 9.59517 15.1148 9.94578 15.3075C10.304 15.505 10.7256 15.5252 11.1047 15.3666C11.7183 15.1078 12.2985 14.7725 12.8292 14.3704C13.1555 14.1228 13.3468 13.7471 13.3551 13.3401C13.3628 12.9394 13.1896 12.5638 12.8793 12.3092C12.6296 12.1033 12.5927 11.7374 12.7938 11.457C13.0261 11.1342 13.2258 10.7857 13.3878 10.424C13.527 10.1144 13.872 9.96276 14.1684 10.0727L14.176 10.0755C14.5517 10.2174 14.9635 10.1777 15.3051 9.9718C15.6536 9.7617 15.8825 9.409 15.9347 9.00414C15.9785 8.67299 16 8.33562 16 8.00031C16 7.66499 15.9784 7.32763 15.9353 6.99789ZM7.99998 11.1307C6.27407 11.1307 4.86955 9.72622 4.86955 8.00031C4.86955 6.2744 6.27407 4.86988 7.99998 4.86988C9.72589 4.86988 11.1304 6.2744 11.1304 8.00031C11.1304 9.72622 9.72589 11.1307 7.99998 11.1307Z"></path>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div
//           data-element="habit"
//           class="CheckListItem_checkListItem__3hI5A"
//           style="border-left: 8px solid rgb(153, 223, 58);"
//         >
//           <div class="CheckListItem_checkListItemContentMainWrapper__245vt">
//             <div class="CheckListItem_checkListItemContentWrapper__1qh7w">
//               <div class="CheckListItem_checkListItemContent__3ToXi">
//                 <label class="CheckListItem_checkListItemProgressLabel__Rz85g">
//                   <span>dfgdfgdfgdfgdf</span>
//                   <progress
//                     class="CheckListItem_checkListItemProgress__n9pty"
//                     id="file"
//                     max="100"
//                     value="50"
//                   >
//                     70%
//                   </progress>
//                 </label>
//                 <p class="CheckListItem_checkListItemProgressValue__1w0di">
//                   50%
//                 </p>
//               </div>
//               <p class="CheckListItem_checkListItemProgressComment__3ErRJ">
//                 Прогресс привития привычки
//               </p>
//             </div>
//             <div class="CheckListItem_checkListButtons__3hLPl">
//               <button
//                 class="CheckListItem_checkListButton__1i8p9 CheckListItem_checkListButtonSubmit__ljbAJ"
//                 type="button"
//               >
//                 <svg
//                   width="24"
//                   height="16"
//                   viewBox="0 0 24 16"
//                   fill="none"
//                   data-element="svg"
//                 >
//                   <path
//                     d="M22 2L9.5 14L2 6.8"
//                     stroke-width="3"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   ></path>
//                 </svg>
//               </button>
//               <button
//                 class="CheckListItem_checkListButton__1i8p9 CheckListItem_checkListButtonDelete__1lyuJ"
//                 type="button"
//               >
//                 <svg
//                   width="22"
//                   height="22"
//                   viewBox="0 0 22 22"
//                   fill="none"
//                   data-element="svg"
//                 >
//                   <path
//                     d="M3 3.00049L18.9997 19.0002"
//                     stroke-width="3"
//                     stroke-linecap="round"
//                   ></path>
//                   <path
//                     d="M3 18.9995L18.9997 2.9998"
//                     stroke-width="3"
//                     stroke-linecap="round"
//                   ></path>
//                 </svg>
//               </button>
//               <button
//                 data-element="button_edit"
//                 class="CheckListItem_checkListButtonEdit__2BwEP"
//                 type="button"
//               >
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                   <path d="M15.9353 6.99789C15.8831 6.59233 15.6536 6.23964 15.3057 6.02954C14.9642 5.82362 14.5517 5.78537 14.1697 5.92796C13.8664 6.04066 13.527 5.88482 13.3892 5.57735C13.2271 5.21422 13.0268 4.86639 12.7951 4.54363C12.5941 4.26398 12.6317 3.89667 12.8814 3.69075C13.1909 3.43682 13.3635 3.06117 13.3558 2.66048C13.3474 2.25352 13.1561 1.87787 12.8292 1.63092C12.2977 1.22814 11.7175 0.892826 11.1047 0.634761C10.7255 0.475467 10.3026 0.496337 9.94574 0.693195C9.59513 0.88588 9.35582 1.22328 9.29044 1.6184C9.23686 1.93979 8.93497 2.1478 8.59131 2.11927C8.20245 2.07822 7.79686 2.07822 7.40732 2.11927C7.0588 2.1478 6.76177 1.94048 6.70888 1.61909C6.6435 1.22325 6.40487 0.88588 6.05426 0.693163C5.69599 0.496304 5.27442 0.474717 4.89459 0.634043C4.28103 0.892826 3.70086 1.22814 3.17008 1.63021C2.84384 1.87787 2.65183 2.2528 2.64417 2.65976C2.63582 3.06045 2.80904 3.43679 3.1186 3.69212C3.36903 3.89804 3.40591 4.26394 3.20485 4.54428C2.97251 4.86844 2.77216 5.21559 2.61075 5.57732C2.47232 5.88619 2.12935 6.04063 1.82328 5.92516C1.44903 5.78533 1.0379 5.82358 0.694923 6.02951C0.347087 6.23889 0.116837 6.59158 0.064663 6.99717C0.0215543 7.3304 0 7.6678 0 8.00031C0 8.33282 0.0215543 8.67022 0.0646956 9.00273C0.116869 9.40829 0.346435 9.7617 0.694271 9.97108C1.03722 10.1777 1.44906 10.2173 1.83098 10.0727C2.12873 9.96205 2.47236 10.1144 2.61081 10.4233C2.77219 10.785 2.97254 11.1328 3.20491 11.457C3.40594 11.7366 3.36838 12.1033 3.11794 12.3099C2.80907 12.5638 2.63654 12.9394 2.6442 13.3401C2.65255 13.7471 2.84387 14.1228 3.17012 14.3704C3.7002 14.7718 4.28038 15.1071 4.89463 15.3666C5.06299 15.4375 5.23966 15.4723 5.41568 15.4723C5.63621 15.4723 5.85534 15.4174 6.0536 15.3075C6.40421 15.1148 6.64353 14.7767 6.70891 14.3823C6.76248 14.0609 7.06786 13.8473 7.40804 13.8821C7.7969 13.9231 8.20248 13.9231 8.59203 13.8821C8.93778 13.848 9.2369 14.0609 9.29047 14.3823C9.35657 14.7774 9.59517 15.1148 9.94578 15.3075C10.304 15.505 10.7256 15.5252 11.1047 15.3666C11.7183 15.1078 12.2985 14.7725 12.8292 14.3704C13.1555 14.1228 13.3468 13.7471 13.3551 13.3401C13.3628 12.9394 13.1896 12.5638 12.8793 12.3092C12.6296 12.1033 12.5927 11.7374 12.7938 11.457C13.0261 11.1342 13.2258 10.7857 13.3878 10.424C13.527 10.1144 13.872 9.96276 14.1684 10.0727L14.176 10.0755C14.5517 10.2174 14.9635 10.1777 15.3051 9.9718C15.6536 9.7617 15.8825 9.409 15.9347 9.00414C15.9785 8.67299 16 8.33562 16 8.00031C16 7.66499 15.9784 7.32763 15.9353 6.99789ZM7.99998 11.1307C6.27407 11.1307 4.86955 9.72622 4.86955 8.00031C4.86955 6.2744 6.27407 4.86988 7.99998 4.86988C9.72589 4.86988 11.1304 6.2744 11.1304 8.00031C11.1304 9.72622 9.72589 11.1307 7.99998 11.1307Z"></path>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div
//           data-element="habit"
//           class="CheckListItem_checkListItem__3hI5A"
//           style="border-left: 8px solid rgb(237, 97, 178);"
//         >
//           <div class="CheckListItem_checkListItemContentMainWrapper__245vt">
//             <div class="CheckListItem_checkListItemContentWrapper__1qh7w">
//               <div class="CheckListItem_checkListItemContent__3ToXi">
//                 <label class="CheckListItem_checkListItemProgressLabel__Rz85g">
//                   <span>bcvbcvb111111</span>
//                   <progress
//                     class="CheckListItem_checkListItemProgress__n9pty"
//                     id="file"
//                     max="100"
//                     value="0"
//                   >
//                     70%
//                   </progress>
//                 </label>
//                 <p class="CheckListItem_checkListItemProgressValue__1w0di">
//                   0%
//                 </p>
//               </div>
//               <p class="CheckListItem_checkListItemProgressComment__3ErRJ">
//                 Прогресс привития привычки
//               </p>
//             </div>
//             <div class="CheckListItem_checkListButtons__3hLPl">
//               <button
//                 class="CheckListItem_checkListButton__1i8p9 CheckListItem_checkListButtonSubmit__ljbAJ"
//                 type="button"
//               >
//                 <svg
//                   width="24"
//                   height="16"
//                   viewBox="0 0 24 16"
//                   fill="none"
//                   data-element="svg"
//                 >
//                   <path
//                     d="M22 2L9.5 14L2 6.8"
//                     stroke-width="3"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   ></path>
//                 </svg>
//               </button>
//               <button
//                 class="CheckListItem_checkListButton__1i8p9 CheckListItem_checkListButtonDelete__1lyuJ"
//                 type="button"
//               >
//                 <svg
//                   width="22"
//                   height="22"
//                   viewBox="0 0 22 22"
//                   fill="none"
//                   data-element="svg"
//                 >
//                   <path
//                     d="M3 3.00049L18.9997 19.0002"
//                     stroke-width="3"
//                     stroke-linecap="round"
//                   ></path>
//                   <path
//                     d="M3 18.9995L18.9997 2.9998"
//                     stroke-width="3"
//                     stroke-linecap="round"
//                   ></path>
//                 </svg>
//               </button>
//               <button
//                 data-element="button_edit"
//                 class="CheckListItem_checkListButtonEdit__2BwEP"
//                 type="button"
//               >
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                   <path d="M15.9353 6.99789C15.8831 6.59233 15.6536 6.23964 15.3057 6.02954C14.9642 5.82362 14.5517 5.78537 14.1697 5.92796C13.8664 6.04066 13.527 5.88482 13.3892 5.57735C13.2271 5.21422 13.0268 4.86639 12.7951 4.54363C12.5941 4.26398 12.6317 3.89667 12.8814 3.69075C13.1909 3.43682 13.3635 3.06117 13.3558 2.66048C13.3474 2.25352 13.1561 1.87787 12.8292 1.63092C12.2977 1.22814 11.7175 0.892826 11.1047 0.634761C10.7255 0.475467 10.3026 0.496337 9.94574 0.693195C9.59513 0.88588 9.35582 1.22328 9.29044 1.6184C9.23686 1.93979 8.93497 2.1478 8.59131 2.11927C8.20245 2.07822 7.79686 2.07822 7.40732 2.11927C7.0588 2.1478 6.76177 1.94048 6.70888 1.61909C6.6435 1.22325 6.40487 0.88588 6.05426 0.693163C5.69599 0.496304 5.27442 0.474717 4.89459 0.634043C4.28103 0.892826 3.70086 1.22814 3.17008 1.63021C2.84384 1.87787 2.65183 2.2528 2.64417 2.65976C2.63582 3.06045 2.80904 3.43679 3.1186 3.69212C3.36903 3.89804 3.40591 4.26394 3.20485 4.54428C2.97251 4.86844 2.77216 5.21559 2.61075 5.57732C2.47232 5.88619 2.12935 6.04063 1.82328 5.92516C1.44903 5.78533 1.0379 5.82358 0.694923 6.02951C0.347087 6.23889 0.116837 6.59158 0.064663 6.99717C0.0215543 7.3304 0 7.6678 0 8.00031C0 8.33282 0.0215543 8.67022 0.0646956 9.00273C0.116869 9.40829 0.346435 9.7617 0.694271 9.97108C1.03722 10.1777 1.44906 10.2173 1.83098 10.0727C2.12873 9.96205 2.47236 10.1144 2.61081 10.4233C2.77219 10.785 2.97254 11.1328 3.20491 11.457C3.40594 11.7366 3.36838 12.1033 3.11794 12.3099C2.80907 12.5638 2.63654 12.9394 2.6442 13.3401C2.65255 13.7471 2.84387 14.1228 3.17012 14.3704C3.7002 14.7718 4.28038 15.1071 4.89463 15.3666C5.06299 15.4375 5.23966 15.4723 5.41568 15.4723C5.63621 15.4723 5.85534 15.4174 6.0536 15.3075C6.40421 15.1148 6.64353 14.7767 6.70891 14.3823C6.76248 14.0609 7.06786 13.8473 7.40804 13.8821C7.7969 13.9231 8.20248 13.9231 8.59203 13.8821C8.93778 13.848 9.2369 14.0609 9.29047 14.3823C9.35657 14.7774 9.59517 15.1148 9.94578 15.3075C10.304 15.505 10.7256 15.5252 11.1047 15.3666C11.7183 15.1078 12.2985 14.7725 12.8292 14.3704C13.1555 14.1228 13.3468 13.7471 13.3551 13.3401C13.3628 12.9394 13.1896 12.5638 12.8793 12.3092C12.6296 12.1033 12.5927 11.7374 12.7938 11.457C13.0261 11.1342 13.2258 10.7857 13.3878 10.424C13.527 10.1144 13.872 9.96276 14.1684 10.0727L14.176 10.0755C14.5517 10.2174 14.9635 10.1777 15.3051 9.9718C15.6536 9.7617 15.8825 9.409 15.9347 9.00414C15.9785 8.67299 16 8.33562 16 8.00031C16 7.66499 15.9784 7.32763 15.9353 6.99789ZM7.99998 11.1307C6.27407 11.1307 4.86955 9.72622 4.86955 8.00031C4.86955 6.2744 6.27407 4.86988 7.99998 4.86988C9.72589 4.86988 11.1304 6.2744 11.1304 8.00031C11.1304 9.72622 9.72589 11.1307 7.99998 11.1307Z"></path>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div
//           data-element="habit"
//           class="CheckListItem_checkListItem__3hI5A"
//           style="border-left: 8px solid rgb(194, 35, 52);"
//         >
//           <div class="CheckListItem_checkListItemContentMainWrapper__245vt">
//             <div class="CheckListItem_checkListItemContentWrapper__1qh7w">
//               <div class="CheckListItem_checkListItemContent__3ToXi">
//                 <label class="CheckListItem_checkListItemProgressLabel__Rz85g">
//                   <span>Планировать свой день.</span>
//                   <progress
//                     class="CheckListItem_checkListItemProgress__n9pty"
//                     id="file"
//                     max="100"
//                     value="0"
//                   >
//                     70%
//                   </progress>
//                 </label>
//                 <p class="CheckListItem_checkListItemProgressValue__1w0di">
//                   0%
//                 </p>
//               </div>
//               <p class="CheckListItem_checkListItemProgressComment__3ErRJ">
//                 Прогресс привития привычки
//               </p>
//             </div>
//             <div class="CheckListItem_checkListButtons__3hLPl">
//               <button
//                 class="CheckListItem_checkListButton__1i8p9 CheckListItem_checkListButtonSubmit__ljbAJ"
//                 type="button"
//               >
//                 <svg
//                   width="24"
//                   height="16"
//                   viewBox="0 0 24 16"
//                   fill="none"
//                   data-element="svg"
//                 >
//                   <path
//                     d="M22 2L9.5 14L2 6.8"
//                     stroke-width="3"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   ></path>
//                 </svg>
//               </button>
//               <button
//                 class="CheckListItem_checkListButton__1i8p9 CheckListItem_checkListButtonDelete__1lyuJ"
//                 type="button"
//               >
//                 <svg
//                   width="22"
//                   height="22"
//                   viewBox="0 0 22 22"
//                   fill="none"
//                   data-element="svg"
//                 >
//                   <path
//                     d="M3 3.00049L18.9997 19.0002"
//                     stroke-width="3"
//                     stroke-linecap="round"
//                   ></path>
//                   <path
//                     d="M3 18.9995L18.9997 2.9998"
//                     stroke-width="3"
//                     stroke-linecap="round"
//                   ></path>
//                 </svg>
//               </button>
//               <button
//                 data-element="button_edit"
//                 class="CheckListItem_checkListButtonEdit__2BwEP"
//                 type="button"
//               >
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                   <path d="M15.9353 6.99789C15.8831 6.59233 15.6536 6.23964 15.3057 6.02954C14.9642 5.82362 14.5517 5.78537 14.1697 5.92796C13.8664 6.04066 13.527 5.88482 13.3892 5.57735C13.2271 5.21422 13.0268 4.86639 12.7951 4.54363C12.5941 4.26398 12.6317 3.89667 12.8814 3.69075C13.1909 3.43682 13.3635 3.06117 13.3558 2.66048C13.3474 2.25352 13.1561 1.87787 12.8292 1.63092C12.2977 1.22814 11.7175 0.892826 11.1047 0.634761C10.7255 0.475467 10.3026 0.496337 9.94574 0.693195C9.59513 0.88588 9.35582 1.22328 9.29044 1.6184C9.23686 1.93979 8.93497 2.1478 8.59131 2.11927C8.20245 2.07822 7.79686 2.07822 7.40732 2.11927C7.0588 2.1478 6.76177 1.94048 6.70888 1.61909C6.6435 1.22325 6.40487 0.88588 6.05426 0.693163C5.69599 0.496304 5.27442 0.474717 4.89459 0.634043C4.28103 0.892826 3.70086 1.22814 3.17008 1.63021C2.84384 1.87787 2.65183 2.2528 2.64417 2.65976C2.63582 3.06045 2.80904 3.43679 3.1186 3.69212C3.36903 3.89804 3.40591 4.26394 3.20485 4.54428C2.97251 4.86844 2.77216 5.21559 2.61075 5.57732C2.47232 5.88619 2.12935 6.04063 1.82328 5.92516C1.44903 5.78533 1.0379 5.82358 0.694923 6.02951C0.347087 6.23889 0.116837 6.59158 0.064663 6.99717C0.0215543 7.3304 0 7.6678 0 8.00031C0 8.33282 0.0215543 8.67022 0.0646956 9.00273C0.116869 9.40829 0.346435 9.7617 0.694271 9.97108C1.03722 10.1777 1.44906 10.2173 1.83098 10.0727C2.12873 9.96205 2.47236 10.1144 2.61081 10.4233C2.77219 10.785 2.97254 11.1328 3.20491 11.457C3.40594 11.7366 3.36838 12.1033 3.11794 12.3099C2.80907 12.5638 2.63654 12.9394 2.6442 13.3401C2.65255 13.7471 2.84387 14.1228 3.17012 14.3704C3.7002 14.7718 4.28038 15.1071 4.89463 15.3666C5.06299 15.4375 5.23966 15.4723 5.41568 15.4723C5.63621 15.4723 5.85534 15.4174 6.0536 15.3075C6.40421 15.1148 6.64353 14.7767 6.70891 14.3823C6.76248 14.0609 7.06786 13.8473 7.40804 13.8821C7.7969 13.9231 8.20248 13.9231 8.59203 13.8821C8.93778 13.848 9.2369 14.0609 9.29047 14.3823C9.35657 14.7774 9.59517 15.1148 9.94578 15.3075C10.304 15.505 10.7256 15.5252 11.1047 15.3666C11.7183 15.1078 12.2985 14.7725 12.8292 14.3704C13.1555 14.1228 13.3468 13.7471 13.3551 13.3401C13.3628 12.9394 13.1896 12.5638 12.8793 12.3092C12.6296 12.1033 12.5927 11.7374 12.7938 11.457C13.0261 11.1342 13.2258 10.7857 13.3878 10.424C13.527 10.1144 13.872 9.96276 14.1684 10.0727L14.176 10.0755C14.5517 10.2174 14.9635 10.1777 15.3051 9.9718C15.6536 9.7617 15.8825 9.409 15.9347 9.00414C15.9785 8.67299 16 8.33562 16 8.00031C16 7.66499 15.9784 7.32763 15.9353 6.99789ZM7.99998 11.1307C6.27407 11.1307 4.86955 9.72622 4.86955 8.00031C4.86955 6.2744 6.27407 4.86988 7.99998 4.86988C9.72589 4.86988 11.1304 6.2744 11.1304 8.00031C11.1304 9.72622 9.72589 11.1307 7.99998 11.1307Z"></path>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div
//           data-element="habit"
//           class="CheckListItem_checkListItem__3hI5A"
//           style="border-left: 8px solid rgb(163, 59, 194);"
//         >
//           <div class="CheckListItem_checkListItemContentMainWrapper__245vt">
//             <div class="CheckListItem_checkListItemContentWrapper__1qh7w">
//               <div class="CheckListItem_checkListItemContent__3ToXi">
//                 <label class="CheckListItem_checkListItemProgressLabel__Rz85g">
//                   <span>Планeeeeeeeeeeeee</span>
//                   <progress
//                     class="CheckListItem_checkListItemProgress__n9pty"
//                     id="file"
//                     max="100"
//                     value="0"
//                   >
//                     70%
//                   </progress>
//                 </label>
//                 <p class="CheckListItem_checkListItemProgressValue__1w0di">
//                   0%
//                 </p>
//               </div>
//               <p class="CheckListItem_checkListItemProgressComment__3ErRJ">
//                 Прогресс привития привычки
//               </p>
//             </div>
//             <div class="CheckListItem_checkListButtons__3hLPl">
//               <button
//                 class="CheckListItem_checkListButton__1i8p9 CheckListItem_checkListButtonSubmit__ljbAJ"
//                 type="button"
//               >
//                 <svg
//                   width="24"
//                   height="16"
//                   viewBox="0 0 24 16"
//                   fill="none"
//                   data-element="svg"
//                 >
//                   <path
//                     d="M22 2L9.5 14L2 6.8"
//                     stroke-width="3"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   ></path>
//                 </svg>
//               </button>
//               <button
//                 class="CheckListItem_checkListButton__1i8p9 CheckListItem_checkListButtonDelete__1lyuJ"
//                 type="button"
//               >
//                 <svg
//                   width="22"
//                   height="22"
//                   viewBox="0 0 22 22"
//                   fill="none"
//                   data-element="svg"
//                 >
//                   <path
//                     d="M3 3.00049L18.9997 19.0002"
//                     stroke-width="3"
//                     stroke-linecap="round"
//                   ></path>
//                   <path
//                     d="M3 18.9995L18.9997 2.9998"
//                     stroke-width="3"
//                     stroke-linecap="round"
//                   ></path>
//                 </svg>
//               </button>
//               <button
//                 data-element="button_edit"
//                 class="CheckListItem_checkListButtonEdit__2BwEP"
//                 type="button"
//               >
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                   <path d="M15.9353 6.99789C15.8831 6.59233 15.6536 6.23964 15.3057 6.02954C14.9642 5.82362 14.5517 5.78537 14.1697 5.92796C13.8664 6.04066 13.527 5.88482 13.3892 5.57735C13.2271 5.21422 13.0268 4.86639 12.7951 4.54363C12.5941 4.26398 12.6317 3.89667 12.8814 3.69075C13.1909 3.43682 13.3635 3.06117 13.3558 2.66048C13.3474 2.25352 13.1561 1.87787 12.8292 1.63092C12.2977 1.22814 11.7175 0.892826 11.1047 0.634761C10.7255 0.475467 10.3026 0.496337 9.94574 0.693195C9.59513 0.88588 9.35582 1.22328 9.29044 1.6184C9.23686 1.93979 8.93497 2.1478 8.59131 2.11927C8.20245 2.07822 7.79686 2.07822 7.40732 2.11927C7.0588 2.1478 6.76177 1.94048 6.70888 1.61909C6.6435 1.22325 6.40487 0.88588 6.05426 0.693163C5.69599 0.496304 5.27442 0.474717 4.89459 0.634043C4.28103 0.892826 3.70086 1.22814 3.17008 1.63021C2.84384 1.87787 2.65183 2.2528 2.64417 2.65976C2.63582 3.06045 2.80904 3.43679 3.1186 3.69212C3.36903 3.89804 3.40591 4.26394 3.20485 4.54428C2.97251 4.86844 2.77216 5.21559 2.61075 5.57732C2.47232 5.88619 2.12935 6.04063 1.82328 5.92516C1.44903 5.78533 1.0379 5.82358 0.694923 6.02951C0.347087 6.23889 0.116837 6.59158 0.064663 6.99717C0.0215543 7.3304 0 7.6678 0 8.00031C0 8.33282 0.0215543 8.67022 0.0646956 9.00273C0.116869 9.40829 0.346435 9.7617 0.694271 9.97108C1.03722 10.1777 1.44906 10.2173 1.83098 10.0727C2.12873 9.96205 2.47236 10.1144 2.61081 10.4233C2.77219 10.785 2.97254 11.1328 3.20491 11.457C3.40594 11.7366 3.36838 12.1033 3.11794 12.3099C2.80907 12.5638 2.63654 12.9394 2.6442 13.3401C2.65255 13.7471 2.84387 14.1228 3.17012 14.3704C3.7002 14.7718 4.28038 15.1071 4.89463 15.3666C5.06299 15.4375 5.23966 15.4723 5.41568 15.4723C5.63621 15.4723 5.85534 15.4174 6.0536 15.3075C6.40421 15.1148 6.64353 14.7767 6.70891 14.3823C6.76248 14.0609 7.06786 13.8473 7.40804 13.8821C7.7969 13.9231 8.20248 13.9231 8.59203 13.8821C8.93778 13.848 9.2369 14.0609 9.29047 14.3823C9.35657 14.7774 9.59517 15.1148 9.94578 15.3075C10.304 15.505 10.7256 15.5252 11.1047 15.3666C11.7183 15.1078 12.2985 14.7725 12.8292 14.3704C13.1555 14.1228 13.3468 13.7471 13.3551 13.3401C13.3628 12.9394 13.1896 12.5638 12.8793 12.3092C12.6296 12.1033 12.5927 11.7374 12.7938 11.457C13.0261 11.1342 13.2258 10.7857 13.3878 10.424C13.527 10.1144 13.872 9.96276 14.1684 10.0727L14.176 10.0755C14.5517 10.2174 14.9635 10.1777 15.3051 9.9718C15.6536 9.7617 15.8825 9.409 15.9347 9.00414C15.9785 8.67299 16 8.33562 16 8.00031C16 7.66499 15.9784 7.32763 15.9353 6.99789ZM7.99998 11.1307C6.27407 11.1307 4.86955 9.72622 4.86955 8.00031C4.86955 6.2744 6.27407 4.86988 7.99998 4.86988C9.72589 4.86988 11.1304 6.2744 11.1304 8.00031C11.1304 9.72622 9.72589 11.1307 7.99998 11.1307Z"></path>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div style="position: absolute; height: 6px; right: 2px; bottom: 2px; left: 2px; border-radius: 3px;">
//     <div style="position: relative; display: block; height: 100%; cursor: pointer; border-radius: inherit; background-color: rgba(0, 0, 0, 0.2); width: 0px;"></div>
//   </div>
//   <div style="position: absolute; width: 6px; right: 2px; bottom: 2px; top: 2px; border-radius: 3px;">
//     <div
//       class="thumb-vertical"
//       style="position: relative; display: block; width: 100%; height: 521px; transform: translateY(0px);"
//     ></div>
//   </div>
// </div>;
