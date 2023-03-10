import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedFilter, sortBy } from "../features/filters/filterSlice";

const Sidebar = () => {
    const dispatch = useDispatch();
    const { filter, sort } = useSelector((state) => state.filters);

    return (
        <aside>
            <div className="sidebar-items">
                <div className="sidebar-content">
                    <h4>Sort</h4>
                    <select
                        name="sort"
                        id="lws-sort"
                        defaultValue={sort}
                        onChange={(e) => dispatch(sortBy(e.target.value))}
                        className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
                    >
                        <option value="">Default</option>
                        <option value="newest">Newest</option>
                        <option value="most_liked">Most Liked</option>
                    </select>
                </div>
                <div className="sidebar-content">
                    <h4>Filter</h4>
                    <div className="radio-group">
                        <div>
                            <input
                                type="radio"
                                value="all"
                                name="filter"
                                id="lws-all"
                                className="radio"
                                checked={filter === "all"}
                                onChange={(e) =>
                                    dispatch(selectedFilter(e.target.value))
                                }
                            />
                            <label htmlFor="lws-all">All</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="filter"
                                value="saved"
                                id="lws-saved"
                                className="radio"
                                checked={filter === "saved"}
                                onChange={(e) =>
                                    dispatch(selectedFilter(e.target.value))
                                }
                            />
                            <label htmlFor="lws-saved">Saved</label>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
