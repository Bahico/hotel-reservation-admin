import {EntityDecoratorInfo} from '@components/logics';
import {BaseEntityModel} from '@components/models/entity.model';

/**
 *
 */
export class EntityDecoratorManager {

    /**
     *
     */
    static readonly FIELDS_KEY = "fieldsInfo";

    /**
     *
     * @param classType
     * @param fieldName
     */
    static getInfo(classType: BaseEntityModel, fieldName: string): EntityDecoratorInfo {
        let field = EntityDecoratorManager.getInfos(classType).find(f => f.name == fieldName);
        if (field)
            return field;

        field = new EntityDecoratorInfo();
        field.name = fieldName;

        if (!field.title)
            field.title = fieldName;

        classType[this.FIELDS_KEY].push(field);
        return field;
    }

    /**
     *
     * @param classType
     */
    static getInfos(classType: any): Array<EntityDecoratorInfo> {
        if (classType[this.FIELDS_KEY])
            return classType[this.FIELDS_KEY];

        if (!classType.prototype) {
            classType[this.FIELDS_KEY] = new Array<EntityDecoratorInfo>();
            return classType[this.FIELDS_KEY] as Array<EntityDecoratorInfo>;
        }

        if (!classType.prototype[this.FIELDS_KEY])
            classType.prototype[this.FIELDS_KEY] = new Array<EntityDecoratorInfo>();

        return classType.prototype[this.FIELDS_KEY];
    }
}
