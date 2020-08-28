module.exports = async function(db, {proffyValue, classValue, classSheduleValues}){
    // inserir dados na table de proffys
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)

    const proffy_id = insertedProffy.lastID

    //inserir dados na tabela classas
    const insertedClass = await db.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffy_id
            ) VALUES (
                "${classValue.subject}",
                "${classValue.cost}",
                "${proffy_id}"
            );
    `)

    const class_id = insertedClass.lastID

     //inserir dados na tabela classas_shedule
    const insertedAllClassSheduleValues = classSheduleValues.map((classSheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to 
            ) VALUES (
                "${class_id}",
                "${classSheduleValue.weekday}",
                "${classSheduleValue.time_from}",
                "${classSheduleValue.time_to}"
            );
        `)
    })
    
    //aqui vou executa todos os db.runs() das class_shedule
    await Promise.all(insertedAllClassSheduleValues)
}