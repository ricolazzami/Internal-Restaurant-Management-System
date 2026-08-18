import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useMemo, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type TabKey = 'home' | 'orders' | 'kitchen' | 'menu' | 'more';

type Order = {
  id: string;
  platform: string;
  code: string;
  amount: string;
  status: string;
  minutes: string;
  items: string[];
  accent: string;
  actionLabel?: string;
};

const tabs: { key: TabKey; label: string; icon: keyof typeof Ionicons.glyphMap }[] = [
  { key: 'home', label: 'Home', icon: 'home' },
  { key: 'orders', label: 'Orders', icon: 'receipt' },
  { key: 'kitchen', label: 'Kitchen', icon: 'restaurant' },
  { key: 'menu', label: 'Menu', icon: 'fast-food' },
  { key: 'more', label: 'More', icon: 'ellipsis-horizontal' },
];

const orders: Order[] = [
  {
    id: '1',
    platform: 'GoFood',
    code: 'GF-1234',
    amount: 'Rp 85.000',
    status: 'Baru',
    minutes: '5m waiting',
    items: ['Ayam Penyet Surabaya', 'Es Teh Manis'],
    accent: '#14A44D',
    actionLabel: 'TERIMA',
  },
  {
    id: '2',
    platform: 'ShopeeFood',
    code: 'SF-9982',
    amount: 'Rp 42.000',
    status: 'Dimasak',
    minutes: '15m',
    items: ['Lele Goreng Crispy'],
    accent: '#F59E0B',
    actionLabel: 'SIAP',
  },
];

const quickActions = [
  { label: 'Update Stok Menu', detail: 'Atur ketersediaan menu', icon: 'restaurant' },
  { label: 'Lihat Laporan', detail: 'Penjualan hari ini', icon: 'bar-chart' },
];

const kitchenQueue = [
  { item: 'Ayam Penyet Surabaya', count: 2, eta: '8 min' },
  { item: 'Lele Crispy', count: 1, eta: '6 min' },
  { item: 'Es Teh Manis', count: 3, eta: '3 min' },
];

const menuList = [
  { name: 'Pecel Lele', sold: '18 terjual', stock: 'Stok: 12', tone: '#F5C48A' },
  { name: 'Nasi Goreng', sold: '11 terjual', stock: 'Stok: 9', tone: '#E7D7B2' },
  { name: 'Es Teh', sold: '25 terjual', stock: 'Stok: 18', tone: '#EAE1DA' },
];

const moreItems = ['Profile Toko', 'Pengaturan', 'Laporan', 'Bantuan'];

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('home');

  const title = useMemo(() => {
    switch (activeTab) {
      case 'orders':
        return 'Orders';
      case 'kitchen':
        return 'Kitchen';
      case 'menu':
        return 'Menu';
      case 'more':
        return 'More';
      default:
        return 'Home';
    }
  }, [activeTab]);

  const renderHome = () => (
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.heroWrap}>
        <Text style={styles.kicker}>HARI INI</Text>
        <View style={styles.dateRow}>
          <Text style={styles.dateText}>24 Oktober 2023</Text>
          <View style={styles.openBadge}>
            <Text style={styles.openBadgeText}>Toko Buka</Text>
          </View>
        </View>
      </View>

      <View style={styles.metricRow}>
        <View style={styles.metricCard}>
          <View style={styles.metricIconWrap}>
            <Ionicons name="receipt" size={18} color="#1F1B17" />
          </View>
          <Text style={styles.metricLabel}>PESANAN BARU</Text>
          <Text style={styles.metricValue}>12</Text>
          <Text style={styles.metricTrend}>+3 dari kemarin</Text>
        </View>

        <View style={styles.metricCard}>
          <View style={styles.metricIconWrap}>
            <Ionicons name="fast-food" size={18} color="#1F1B17" />
          </View>
          <Text style={styles.metricLabel}>SIAP DIAMBIL</Text>
          <Text style={styles.metricValue}>4</Text>
          <Text style={styles.metricTrend}>Driver sedang jalan</Text>
        </View>
      </View>

      <View style={styles.sectionHeaderRow}>
        <Text style={styles.sectionTitle}>Aksi Cepat</Text>
      </View>

      <View style={styles.actionGrid}>
        {quickActions.map((item) => (
          <TouchableOpacity key={item.label} style={styles.actionCard} activeOpacity={0.9}>
            <View style={styles.actionLeft}>
              <View style={styles.actionIconWrap}>
                <Ionicons name={item.icon as any} size={20} color="#1F1B17" />
              </View>
              <View>
                <Text style={styles.actionTitle}>{item.label}</Text>
                <Text style={styles.actionDetail}>{item.detail}</Text>
              </View>
            </View>
            <Ionicons name="arrow-forward" size={18} color="#1F1B17" />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );

  const renderOrders = () => (
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.filterRow}>
        {['SEMUA', 'BARU', 'DIMASAK', 'SIAP', 'SELESAI'].map((chip, index) => (
          <TouchableOpacity
            key={chip}
            style={[styles.filterChip, index === 0 && styles.filterChipActive]}
            activeOpacity={0.9}
          >
            <Text style={[styles.filterChipText, index === 0 && styles.filterChipTextActive]}>{chip}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {orders.map((order) => (
        <View key={order.id} style={styles.orderCard}>
          <View style={[styles.orderStripe, { backgroundColor: order.accent }]} />
          <View style={styles.orderBody}>
            <View style={styles.orderHeader}>
              <View>
                <View style={[styles.platformBadge, { backgroundColor: `${order.accent}22` }]}>
                  <Text style={[styles.platformBadgeText, { color: order.accent }]}>
                    {order.platform} • {order.code}
                  </Text>
                </View>
                <Text style={styles.amountText}>{order.amount}</Text>
              </View>

              <View style={styles.orderMeta}>
                <Text style={styles.metaLabel}>MASUK</Text>
                <Text style={styles.metaTime}>14:32</Text>
                <Text style={styles.metaWait}>{order.minutes}</Text>
              </View>
            </View>

            <View style={styles.divider} />

            {order.items.map((item, index) => (
              <View key={`${order.id}-${item}`} style={styles.itemRow}>
                <Text style={styles.qtyText}>{index === 0 ? '2x' : '1x'}</Text>
                <View style={styles.itemInfo}>
                  <Text style={styles.itemName}>{item}</Text>
                  {index === 0 && <Text style={styles.itemNote}>+ Nasi Uduk</Text>}
                </View>
              </View>
            ))}

            <View style={styles.actionRow}>
              <TouchableOpacity style={styles.secondaryButton} activeOpacity={0.9}>
                <Text style={styles.secondaryText}>TOLAK</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.primaryButton} activeOpacity={0.9}>
                <Text style={styles.primaryText}>{order.actionLabel}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );

  const renderKitchen = () => (
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Antrian Dapur</Text>
        {kitchenQueue.map((item) => (
          <View key={item.item} style={styles.kitchenRow}>
            <View style={styles.kitchenInfo}>
              <Text style={styles.kitchenName}>{item.item}</Text>
              <Text style={styles.kitchenMeta}>{item.count} porsi • {item.eta}</Text>
            </View>
            <TouchableOpacity style={styles.kitchenDot} activeOpacity={0.9}>
              <Ionicons name="checkmark" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );

  const renderMenu = () => (
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      {menuList.map((item) => (
        <View key={item.name} style={styles.menuCard}>
          <View style={[styles.menuColor, { backgroundColor: item.tone }]} />
          <View style={styles.menuContent}>
            <View>
              <Text style={styles.menuName}>{item.name}</Text>
              <Text style={styles.menuSold}>{item.sold}</Text>
            </View>
            <View style={styles.stockWrap}>
              <Text style={styles.stockText}>{item.stock}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );

  const renderMore = () => (
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.panel}>
        {moreItems.map((item) => (
          <TouchableOpacity key={item} style={styles.moreRow} activeOpacity={0.85}>
            <Text style={styles.moreText}>{item}</Text>
            <Ionicons name="chevron-forward" size={16} color="#444748" />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );

  const renderTab = () => {
    switch (activeTab) {
      case 'orders':
        return renderOrders();
      case 'kitchen':
        return renderKitchen();
      case 'menu':
        return renderMenu();
      case 'more':
        return renderMore();
      default:
        return renderHome();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.phoneShell}>
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>W</Text>
          </View>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.8}>
            <Ionicons name="notifications-outline" size={20} color="#1F1B17" />
          </TouchableOpacity>
        </View>

        {renderTab()}

        <View style={styles.tabBar}>
          {tabs.map((tab) => {
            const active = tab.key === activeTab;
            return (
              <TouchableOpacity
                key={tab.key}
                style={[styles.tabButton, active && styles.tabButtonActive]}
                onPress={() => setActiveTab(tab.key)}
                activeOpacity={0.9}
              >
                <Ionicons
                  name={tab.icon}
                  size={20}
                  color={active ? '#1F1B17' : '#444748'}
                />
                <Text style={[styles.tabText, active && styles.tabTextActive]}>{tab.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3e7df',
  },
  phoneShell: {
    flex: 1,
    width: '100%',
    maxWidth: 430,
    alignSelf: 'center',
    backgroundColor: '#fff8f4',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#fff8f4',
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#f0e6e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F1B17',
  },
  title: {
    flex: 1,
    marginLeft: 12,
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '600',
    color: '#1f1b17',
    fontFamily: 'Georgia',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f5ece6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 100,
  },
  heroWrap: {
    paddingVertical: 8,
  },
  kicker: {
    fontSize: 12,
    letterSpacing: 1.2,
    fontWeight: '700',
    color: '#444748',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateText: {
    fontSize: 26,
    fontWeight: '600',
    color: '#1F1B17',
    fontFamily: 'Georgia',
  },
  openBadge: {
    backgroundColor: '#f2d7bc',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  openBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#7A512D',
    textTransform: 'uppercase',
  },
  metricRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
  metricCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: '#efe5df',
  },
  metricIconWrap: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#f5ece6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  metricLabel: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
    color: '#444748',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  metricValue: {
    fontSize: 32,
    color: '#1F1B17',
    fontWeight: '700',
    marginBottom: 4,
  },
  metricTrend: {
    fontSize: 11,
    color: '#444748',
  },
  sectionHeaderRow: {
    marginTop: 24,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F1B17',
    fontFamily: 'Georgia',
  },
  actionGrid: {
    gap: 12,
  },
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#efe5df',
    padding: 14,
  },
  actionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  actionIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#f5ece6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F1B17',
  },
  actionDetail: {
    fontSize: 12,
    color: '#444748',
    marginTop: 2,
  },
  filterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  filterChip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#d7d0cc',
    backgroundColor: '#fff',
  },
  filterChipActive: {
    backgroundColor: '#1F1B17',
    borderColor: '#1F1B17',
  },
  filterChipText: {
    color: '#1F1B17',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
  },
  filterChipTextActive: {
    color: '#fff',
  },
  orderCard: {
    backgroundColor: '#fff',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#efe5df',
    overflow: 'hidden',
    marginBottom: 18,
  },
  orderStripe: {
    height: 4,
    width: '100%',
  },
  orderBody: {
    padding: 16,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  platformBadge: {
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  platformBadgeText: {
    fontSize: 10,
    fontWeight: '700',
  },
  amountText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1F1B17',
    fontFamily: 'Georgia',
  },
  orderMeta: {
    alignItems: 'flex-end',
  },
  metaLabel: {
    fontSize: 10,
    letterSpacing: 1,
    color: '#444748',
    textTransform: 'uppercase',
  },
  metaTime: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F1B17',
  },
  metaWait: {
    fontSize: 12,
    color: '#C33B2E',
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#efe5df',
    marginVertical: 14,
  },
  itemRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  qtyText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#7f5531',
    width: 28,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    color: '#1F1B17',
    fontWeight: '600',
  },
  itemNote: {
    fontSize: 12,
    color: '#444748',
    marginTop: 2,
  },
  actionRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 6,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: '#f5ece6',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  secondaryText: {
    color: '#1F1B17',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#1F1B17',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  primaryText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
  },
  panel: {
    backgroundColor: '#fff',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#efe5df',
    padding: 16,
    gap: 12,
  },
  panelTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F1B17',
    fontFamily: 'Georgia',
    marginBottom: 6,
  },
  kitchenRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f1e8e3',
    paddingBottom: 10,
  },
  kitchenInfo: {
    flex: 1,
  },
  kitchenName: {
    fontSize: 16,
    color: '#1F1B17',
    fontWeight: '600',
  },
  kitchenMeta: {
    color: '#444748',
    marginTop: 4,
    fontSize: 12,
  },
  kitchenDot: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#1F1B17',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuCard: {
    backgroundColor: '#fff',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#efe5df',
    overflow: 'hidden',
    marginBottom: 14,
  },
  menuColor: {
    height: 8,
    width: '100%',
  },
  menuContent: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F1B17',
  },
  menuSold: {
    marginTop: 4,
    color: '#444748',
    fontSize: 12,
  },
  stockWrap: {
    backgroundColor: '#f5ece6',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  stockText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#1F1B17',
  },
  moreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#f1e8e3',
  },
  moreText: {
    fontSize: 16,
    color: '#1F1B17',
    fontWeight: '500',
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff8f4',
    paddingTop: 10,
    paddingBottom: 16,
    paddingHorizontal: 12,
    borderTopWidth: 1,
    borderTopColor: '#efe5df',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    paddingVertical: 8,
  },
  tabButtonActive: {
    backgroundColor: '#f5ece6',
  },
  tabText: {
    fontSize: 10,
    color: '#444748',
    marginTop: 4,
    fontWeight: '600',
  },
  tabTextActive: {
    color: '#1F1B17',
  },
});
