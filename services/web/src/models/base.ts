import { Model } from 'objection'

export  default class BaseModel extends Model {
    createdAt!: String
    updatedAt!: String

    $beforeValidate (jsonSchema, json, opt) {
        if (this.constructor.timestamps) {
            jsonSchema.properties.createdAt = { type: 'string', format: 'date-time' }
            jsonSchema.properties.updatedAt = { type: 'string', format: 'date-time' }
        }

        return jsonSchema
    }

    $beforeInsert () {
        if (!this.constructor.timestamps) return
        this.createdAt = new Date().toISOString()
    }

    $beforeUpdate () {
        if (!this.constructor.timestamps) return
        this.updatedAt = new Date().toISOString()
    }

    // $toDatabaseJson() {
    //     const omit = this.constructor.getRelations()
    //     return this.$$toJson(true, omit, null)
    // }
}

// class MyModel extends BaseModel {
//     static timestamps = true
// }