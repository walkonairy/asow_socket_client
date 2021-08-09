import React, {useEffect, useState} from "react";

const TestHookDeps: React.FC = () => {

  const [loopObj, setLoopObj] = useState<any>({name: {sub: {sss: '123'}}});

  useEffect(() => {
    console.log(loopObj)
  }, [loopObj])

  const arr: number[] = [];

  function onChangeObjLoop() {
    const _loopObj = {name: {sub: {sss: '456'}}}
    // const _loopObj = loopObj.name = {sub: {sss: '456'}}
    setLoopObj(_loopObj);

    const str = 'sdas das dsad sad    sdqweqwdsa sad sa qd q';
    console.log(emptyString(str));

    generateArr(31);
    console.log(arr)
  }

  function emptyString(str: string) {
    return str.split('').filter(item => item && item !== ' ').join('');
  }

  function generateArr(length: number) {
    if (length <= 0) return;
    const random = Math.floor(Math.random() * 31 + 2);
    if (arr.includes(random)) {
      generateArr(length)
    } else {
      length--;
      arr.push(random);
      generateArr(length);
    }
  }

  return (
    <>
      <button onClick={onChangeObjLoop}>深度</button>
    </>
  )
};

export default TestHookDeps;
