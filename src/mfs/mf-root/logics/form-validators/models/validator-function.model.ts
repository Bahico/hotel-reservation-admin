import {ValidatorContext} from "./validator-context";

/**
 * New Base Validator type
 */
export type ValidatorFunctionModel = (context: ValidatorContext, ...args: any[]) => void;
