const MUST_CHINESE = 'mustChinese'
const errorMessageTemplate = {
  [MUST_CHINESE]: '请输入中文',
}

export default function addRule(elementUIVerify) {
  elementUIVerify.addRule(MUST_CHINESE, () => [
    {
      validator(rule, val, callback) {
        const reg = /[\u4e00-\u9fa5]/gm
        if (!val.match(reg)) {
          return callback(Error(errorMessageTemplate[MUST_CHINESE]))
        }
        callback()
      },
    },
  ])
}
