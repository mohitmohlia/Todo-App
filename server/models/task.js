export default (sequelize,Sequelize)=> {
    return sequelize.define('task',{
        id:{
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true
        },
        text:{
            type:Sequelize.STRING
        },
        isComplete:{
            type:Sequelize.BOOLEAN,
            defaultValue:false
        },
        updatedAt:{
            type:Sequelize.DATE,
            allowNull:false,
            defaultValue: Sequelize.literal("(now() AT TIME ZONE 'UTC')")
        },
        createdAt:{
            type:Sequelize.DATE,
            allowNull:false,
            defaultValue: Sequelize.literal("(now() AT TIME ZONE 'UTC')")
        }
    })
}