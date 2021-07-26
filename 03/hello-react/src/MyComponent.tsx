// import PropTypes from 'prop-types';

// function MyComponent(props: any) {
//   const { name, children, favoriteNumber } = props;
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name}입니다.
//       <br />
//       children 값은 {children}입니다.
//       <br />
//       제가 쫗아하는 숫자는 {favoriteNumber} 입니다.
//     </div>
//   );
// }

// MyComponent.defaultProps = {
//   name: '기본 이름',
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   children: PropTypes.string,
//   favoriteNumber:PropTypes.number.isRequired
// }

// favoriteNumber에 기본 값을 넣어줘야 하는 것 빼면 거의 똑같이 작동하는 코드
type MyComponentProps = { name?: string, children?: string, favoriteNumber: number }

function MyComponent(props: MyComponentProps = {name: "기본 이름", favoriteNumber: 1}) {
  const { name, children, favoriteNumber } = props;
    return (
    <div>
      안녕하세요, 제 이름은 {name}입니다.
      <br />
      children 값은 {children}입니다.
      <br />
      제가 쫗아하는 숫자는 {favoriteNumber} 입니다.
    </div>
  );
}

export default MyComponent;
