import {EntityDecoratorManager} from "@components/logics";
import {EntityRelation} from '@components/logics';


/**
 * need first stay from all
 * @returns
 */
export function Relation(options: EntityRelation) {
    return function (target: any, key: string) {
        let field = EntityDecoratorManager.getInfo(target, key);
        field.type = EntityRelation;
        field.relation = options;
    };
}
