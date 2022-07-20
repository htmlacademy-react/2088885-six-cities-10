type IItemList<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode
}

export function ItemList<T>(props: IItemList<T>) {
  return (
    <>
      {props.items.map(props.renderItem)}
    </>
  );
}
