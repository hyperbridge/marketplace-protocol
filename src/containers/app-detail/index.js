import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Layout, Menu, Table, Badge, Breadcrumb, Dropdown, Icon, Spin } from 'antd'
import { WhiteSpace } from 'antd-mobile'

import AdvancedLayout from '../../components/advanced-layout'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout



const Container = (app) => (
    <AdvancedLayout>
        <Content style={{ 'padding': '10px', 'marginTop': '10px' }}>
            <div>{app.title}</div>
            <div>{app.publisher}</div>
            {app.title}
            <br />
            {app.id}
            <div>
                tabs
            </div>
            <div>
                friends who own this
            </div>
            <div>
                achievements
            </div>
            <div>
                news
            </div>
            <div>
                Launch
            </div>
        </Content>
    </AdvancedLayout>
)

Container.displayName = 'app-detail/Container'

const mapStateToProps = state => ({
    app: state.marketplace.selectedApp
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)
