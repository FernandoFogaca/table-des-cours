import { Course } from "../../App"
interface itemLProps {
    course: Course

}


export const ItemL = ({course}:itemLProps) => {
    return (

        <li> 
            <b>Name: </b>{course.name}
            <br />
            <b>Description: </b>{course.description}
            <br />
            <b>Instructor: </b>{course.instructor}
            <hr />
        </li>
    )
}  