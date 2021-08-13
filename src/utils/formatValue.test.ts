import * as formatValue from "./formatValue"
// @ponicode
describe("formatValue.default", () => {
    test("0", () => {
        let callFunction: any = () => {
            formatValue.default(-1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            formatValue.default(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            formatValue.default(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            formatValue.default(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            formatValue.default(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            formatValue.default(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
