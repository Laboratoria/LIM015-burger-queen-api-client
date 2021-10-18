import Button from './Button'
import CustomerName from './CustomerName';

const PickItems = () => {
    return (
        <div>
            <div>
                <Button type={'primary'} name={'VIEW ORDER'} />
            </div>
            <div>
                <Button type={'secondary'} name={'BREAKFAST'} />
                <Button type={'tertiary'} name={'LUNCH'} />
            </div>

            {/* <CustomerName /> */}

        </div >
    )
}
export default PickItems;